"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/shared/api/graphqlClient";

export function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
