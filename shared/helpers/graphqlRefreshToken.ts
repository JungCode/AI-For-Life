import { toast } from "sonner";
import { Observable } from "@apollo/client";
import type {
  Operation,
  FetchResult,
  NextLink,
} from "@apollo/client/link/core";

// shared
import { storageUtils } from "@/shared/utils";
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from "@/shared/generated/schemas";
import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
} from "@/shared/constants/storageKey";

// internal
import { client } from "../api/graphqlClient";

type CallbackFunction = (value?: unknown) => void;

let isRefreshing = false;
let pendingRequests: CallbackFunction[] = [];

const setIsRefreshing = (value: boolean) => {
  isRefreshing = value;
};

const addPendingRequest = (pendingRequest: CallbackFunction) => {
  pendingRequests.push(pendingRequest);
};

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback());
  pendingRequests = [];
};

const handleRefreshToken = ({
  forward,
  operation,
}: {
  forward: NextLink;
  operation: Operation;
}) => {
  const refreshToken = storageUtils.get(LOCAL_STORAGE_REFRESH_TOKEN_KEY);

  if (!isRefreshing) {
    try {
      setIsRefreshing(true);
      return new Observable<FetchResult>((observer) => {
        client
          .mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
            mutation: RefreshTokenDocument,
            variables: { input: { refreshToken: refreshToken || "" } },
          })
          .then((res: FetchResult<RefreshTokenMutation>) => {
            const accessToken = res.data?.refreshToken.accessToken || "";
            const newRefreshToken = res.data?.refreshToken.refreshToken || "";

            if (res.data?.refreshToken) {
              const { headers } = operation.getContext();

              storageUtils.set(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken);
              storageUtils.set(
                LOCAL_STORAGE_REFRESH_TOKEN_KEY,
                newRefreshToken
              );

              operation.setContext({
                headers: { ...headers, authorization: `Bearer ${accessToken}` },
              });

              resolvePendingRequests();
              setIsRefreshing(false);

              forward(operation).subscribe(observer);
            }
          })
          .catch(() => {
            storageUtils.clear();
            toast.error("Token expires");
            window.location.reload();
            observer.error(new Error("Token refresh failed"));
          });
      });
    } catch (error) {
      setIsRefreshing(false);
      console.error(error);
      return new Observable<FetchResult>((observer) => {
        addPendingRequest(() => forward(operation).subscribe(observer));
      });
    }
  }
};

export { handleRefreshToken };
