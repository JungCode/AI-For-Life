import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type ClientCreateWorkspaceDto = {
  avatarKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ClientSignUpDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ClientSimpleChatRequest = {
  messages: Array<MessageInput>;
  threadId?: InputMaybe<Scalars['String']['input']>;
};

export type IClientRefreshTokenResponse = {
  __typename?: 'IClientRefreshTokenResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type IClientWorkspace = {
  __typename?: 'IClientWorkspace';
  avatarKey?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type LogOutDto = {
  refreshToken: Scalars['String']['input'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type MessageInput = {
  content: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createWorkspace: IClientWorkspace;
  logIn: LoginResponse;
  logOut: ResponseBaseMessage;
  refreshToken: IClientRefreshTokenResponse;
  signUp: IClientRefreshTokenResponse;
};


export type MutationCreateWorkspaceArgs = {
  input: ClientCreateWorkspaceDto;
};


export type MutationLogInArgs = {
  input: LoginDto;
};


export type MutationLogOutArgs = {
  input: LogOutDto;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenDto;
};


export type MutationSignUpArgs = {
  input: ClientSignUpDto;
};

export type Query = {
  __typename?: 'Query';
  chatWithAgent: Scalars['String']['output'];
  getWorkspaceInfo: IClientWorkspace;
  getWorkspaces: Array<IClientWorkspace>;
  simpleChat: Scalars['String']['output'];
};


export type QueryChatWithAgentArgs = {
  input: ClientSimpleChatRequest;
};


export type QuerySimpleChatArgs = {
  input: ClientSimpleChatRequest;
};

export type RefreshTokenDto = {
  refreshToken: Scalars['String']['input'];
};

export type ResponseBaseMessage = {
  __typename?: 'ResponseBaseMessage';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type LogInMutationVariables = Exact<{
  input: LoginDto;
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn: { __typename?: 'LoginResponse', accessToken: string, email: string, firstName: string, lastName: string, refreshToken: string } };

export type LogOutMutationVariables = Exact<{
  input: LogOutDto;
}>;


export type LogOutMutation = { __typename?: 'Mutation', logOut: { __typename?: 'ResponseBaseMessage', message?: string | null, success: boolean } };

export type SignUpMutationVariables = Exact<{
  input: ClientSignUpDto;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'IClientRefreshTokenResponse', accessToken: string, refreshToken: string } };

export type MutationMutationVariables = Exact<{
  input: ClientCreateWorkspaceDto;
}>;


export type MutationMutation = { __typename?: 'Mutation', createWorkspace: { __typename?: 'IClientWorkspace', avatarKey?: string | null, createdAt: any, id: string, name: string } };

export type GetWorkspacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkspacesQuery = { __typename?: 'Query', getWorkspaces: Array<{ __typename?: 'IClientWorkspace', avatarKey?: string | null, createdAt: any, id: string, name: string }> };

export type RefreshTokenMutationVariables = Exact<{
  input: RefreshTokenDto;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'IClientRefreshTokenResponse', accessToken: string, refreshToken: string } };


export const LogInDocument = gql`
    mutation LogIn($input: LoginDto!) {
  logIn(input: $input) {
    accessToken
    email
    firstName
    lastName
    refreshToken
  }
}
    `;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;
export const LogOutDocument = gql`
    mutation LogOut($input: LogOutDto!) {
  logOut(input: $input) {
    message
    success
  }
}
    `;
export type LogOutMutationFn = Apollo.MutationFunction<LogOutMutation, LogOutMutationVariables>;

/**
 * __useLogOutMutation__
 *
 * To run a mutation, you first call `useLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutMutation, { data, loading, error }] = useLogOutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLogOutMutation(baseOptions?: Apollo.MutationHookOptions<LogOutMutation, LogOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogOutMutation, LogOutMutationVariables>(LogOutDocument, options);
      }
export type LogOutMutationHookResult = ReturnType<typeof useLogOutMutation>;
export type LogOutMutationResult = Apollo.MutationResult<LogOutMutation>;
export type LogOutMutationOptions = Apollo.BaseMutationOptions<LogOutMutation, LogOutMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: ClientSignUpDTO!) {
  signUp(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const MutationDocument = gql`
    mutation Mutation($input: ClientCreateWorkspaceDto!) {
  createWorkspace(input: $input) {
    avatarKey
    createdAt
    id
    name
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const GetWorkspacesDocument = gql`
    query GetWorkspaces {
  getWorkspaces {
    avatarKey
    createdAt
    id
    name
  }
}
    `;

/**
 * __useGetWorkspacesQuery__
 *
 * To run a query within a React component, call `useGetWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkspacesQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkspacesQuery, GetWorkspacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkspacesQuery, GetWorkspacesQueryVariables>(GetWorkspacesDocument, options);
      }
export function useGetWorkspacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkspacesQuery, GetWorkspacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkspacesQuery, GetWorkspacesQueryVariables>(GetWorkspacesDocument, options);
        }
export type GetWorkspacesQueryHookResult = ReturnType<typeof useGetWorkspacesQuery>;
export type GetWorkspacesLazyQueryHookResult = ReturnType<typeof useGetWorkspacesLazyQuery>;
export type GetWorkspacesQueryResult = Apollo.QueryResult<GetWorkspacesQuery, GetWorkspacesQueryVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($input: RefreshTokenDto!) {
  refreshToken(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;