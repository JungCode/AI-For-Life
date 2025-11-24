import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { HttpLink } from "@apollo/client/link/http";
import { v4 as getUUID } from "uuid";

// shared
import { storageUtils, getRateLimitHash } from "@/shared/utils";
import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_RATE_LIMIT_UUID,
} from "@/shared/constants";
import { handleGraphQLError, GraphQLError } from "@/shared/helpers";

const cache = new InMemoryCache({
  typePolicies: {
    IsoManualQuestion: {
      keyFields: ["id"],
    },
  },
});

const baseLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/api/client`,
});

const authLink = setContext((_, { headers }) => {
  const accessTokenKey = storageUtils.get(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
  let rateLimitUUID = storageUtils.get(LOCAL_STORAGE_RATE_LIMIT_UUID);

  if (!rateLimitUUID) {
    rateLimitUUID = getUUID();
    storageUtils.set(LOCAL_STORAGE_RATE_LIMIT_UUID, rateLimitUUID);
  }

  return {
    headers: {
      ...headers,
      ["authorization"]: accessTokenKey
        ? `Bearer ${accessTokenKey}`
        : undefined,
      ["x-device-token"]: rateLimitUUID
        ? getRateLimitHash(rateLimitUUID)
        : undefined,
    },
  };
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors && graphQLErrors.length > 0) {
    handleGraphQLError(graphQLErrors[0] as GraphQLError, operation, forward);
  }
});

const client = new ApolloClient({
  cache,
  devtools: {
    enabled: process.env.NODE_ENV === "development",
  },
  defaultOptions: { watchQuery: { notifyOnNetworkStatusChange: true } },
  link: from([errorLink, authLink.concat(baseLink)]),
});

export { client };
