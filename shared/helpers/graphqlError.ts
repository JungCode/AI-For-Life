import { Operation, FetchResult, Observable } from "@apollo/client";

// shared
import { HTTP_MESSAGE, HTTP_STATUS } from "@/shared/constants";

// interal
import { handleWorkspaceAccessDenied } from "./graphqWorkspaceAccessDenied";
import { handleRefreshToken } from "./graphqlRefreshToken";

interface GraphQLError {
  messageCode: string;
  statusCode: HTTP_STATUS;
  message: HTTP_MESSAGE;
}

const handleGraphQLError = (
  errors: GraphQLError,
  operation: Operation,
  forward: (operation: Operation) => Observable<FetchResult>
) => {
  const key = `${errors.statusCode}:${errors.message}`;

  switch (key) {
    case `${HTTP_STATUS.UNAUTHORIZED}:${HTTP_MESSAGE.PERMISSION_DENIED}`:
      handleWorkspaceAccessDenied(operation);
      break;

    case `${HTTP_STATUS.UNAUTHORIZED}:${HTTP_MESSAGE.UNAUTHORIZED}`:
      handleRefreshToken({
        forward,
        operation,
      });
      break;

    default:
      console.log(`Error: ${errors.message}`);
  }
};

export { handleGraphQLError };
export type { GraphQLError };
