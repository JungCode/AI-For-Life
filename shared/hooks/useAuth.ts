import { useCallback } from "react";
import { useApolloClient } from "@apollo/client";

// shared
import { useLogOutMutation } from "@/shared/generated/schemas";
import { storageUtils } from "@/shared/utils";
import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
} from "@/shared/constants";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const client = useApolloClient();
  const router = useRouter();

  const accessToken = storageUtils.get(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
  const refreshToken = storageUtils.get(LOCAL_STORAGE_REFRESH_TOKEN_KEY);

  const [logOutRequest, { loading: isLoadingLogout }] = useLogOutMutation();

  const clearToken = useCallback(() => {
    storageUtils.remove(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    storageUtils.remove(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
  }, []);

  const setAuthToken = useCallback(
    (accessToken: string, refreshToken: string) => {
      storageUtils.set(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken);
      storageUtils.set(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
    },
    []
  );

  const logOut = useCallback(async () => {
    try {
      await logOutRequest({
        variables: { input: { refreshToken: refreshToken || "" } },
      });
    } finally {
      await client.clearStore();
      storageUtils.clear();
      router.push("/auth/login");
    }
  }, [client, logOutRequest, router, refreshToken]);

  return {
    isLoadingLogout,
    accessToken,
    clearToken,
    logOut,
    refreshToken,
    setAuthToken,
  };
};

export { useAuth };
