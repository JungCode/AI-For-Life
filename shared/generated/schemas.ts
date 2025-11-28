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

export type ClientCreateMindMapDto = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ClientCreateWorkspaceDto = {
  avatarKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ClientMindMapResponse = {
  __typename?: 'ClientMindMapResponse';
  created_at: Scalars['DateTime']['output'];
  data: MindMapData;
  id: Scalars['ID']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
  workspaceId: Scalars['String']['output'];
};

export type ClientSignUpDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ClientSimpleChatRequest = {
  message: Scalars['String']['input'];
  threadId?: InputMaybe<Scalars['String']['input']>;
};

export type ClientSimpleChatResponse = {
  __typename?: 'ClientSimpleChatResponse';
  response: Scalars['String']['output'];
  threadId: Scalars['String']['output'];
};

export type ClientUpdateWorkspaceDto = {
  avatarKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
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

export type MindMapData = {
  __typename?: 'MindMapData';
  edges: Array<MindMapEdge>;
  nodes: Array<MindMapNode>;
};

export type MindMapEdge = {
  __typename?: 'MindMapEdge';
  animated?: Maybe<Scalars['Boolean']['output']>;
  data?: Maybe<MindMapNodeData>;
  id: Scalars['ID']['output'];
  source: Scalars['String']['output'];
  target: Scalars['String']['output'];
};

export type MindMapNode = {
  __typename?: 'MindMapNode';
  content?: Maybe<Scalars['String']['output']>;
  data?: Maybe<MindMapNodeData>;
  id: Scalars['ID']['output'];
  position?: Maybe<MindMapPosition>;
  style?: Maybe<MindMapStyle>;
};

export type MindMapNodeData = {
  __typename?: 'MindMapNodeData';
  label?: Maybe<Scalars['String']['output']>;
};

export type MindMapPosition = {
  __typename?: 'MindMapPosition';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type MindMapStyle = {
  __typename?: 'MindMapStyle';
  background: Scalars['String']['output'];
  border: Scalars['String']['output'];
  borderRadius: Scalars['String']['output'];
  color: Scalars['String']['output'];
  fontSize?: Maybe<Scalars['String']['output']>;
  fontWeight?: Maybe<Scalars['String']['output']>;
  padding: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMindmap: ClientMindMapResponse;
  createWorkspace: IClientWorkspace;
  deleteWorkspace: ResponseBaseMessage;
  logIn: LoginResponse;
  logOut: ResponseBaseMessage;
  refreshToken: IClientRefreshTokenResponse;
  signUp: IClientRefreshTokenResponse;
  simpleChat: ClientSimpleChatResponse;
  updateWorkspace: ResponseBaseMessage;
};


export type MutationCreateMindmapArgs = {
  input: ClientCreateMindMapDto;
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


export type MutationSimpleChatArgs = {
  input: ClientSimpleChatRequest;
};


export type MutationUpdateWorkspaceArgs = {
  input: ClientUpdateWorkspaceDto;
};

export type Query = {
  __typename?: 'Query';
  getWorkspaceInfo: IClientWorkspace;
  getWorkspaces: Array<IClientWorkspace>;
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

export type SimpleChatMutationVariables = Exact<{
  input: ClientSimpleChatRequest;
}>;


export type SimpleChatMutation = { __typename?: 'Mutation', simpleChat: { __typename?: 'ClientSimpleChatResponse', response: string, threadId: string } };

export type CreateMindmapMutationVariables = Exact<{
  input: ClientCreateMindMapDto;
}>;


export type CreateMindmapMutation = { __typename?: 'Mutation', createMindmap: { __typename?: 'ClientMindMapResponse', created_at: any, id: string, summary?: string | null, updated_at: any, workspaceId: string, data: { __typename?: 'MindMapData', edges: Array<{ __typename?: 'MindMapEdge', animated?: boolean | null, id: string, source: string, target: string, data?: { __typename?: 'MindMapNodeData', label?: string | null } | null }> } } };

export type CreateWorkspaceMutationVariables = Exact<{
  input: ClientCreateWorkspaceDto;
}>;


export type CreateWorkspaceMutation = { __typename?: 'Mutation', createWorkspace: { __typename?: 'IClientWorkspace', avatarKey?: string | null, createdAt: any, id: string, name: string } };

export type DeleteWorkspaceMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteWorkspaceMutation = { __typename?: 'Mutation', deleteWorkspace: { __typename?: 'ResponseBaseMessage', message?: string | null, success: boolean } };

export type UpdateWorkspaceMutationVariables = Exact<{
  input: ClientUpdateWorkspaceDto;
}>;


export type UpdateWorkspaceMutation = { __typename?: 'Mutation', updateWorkspace: { __typename?: 'ResponseBaseMessage', message?: string | null, success: boolean } };

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
export const SimpleChatDocument = gql`
    mutation SimpleChat($input: ClientSimpleChatRequest!) {
  simpleChat(input: $input) {
    response
    threadId
  }
}
    `;
export type SimpleChatMutationFn = Apollo.MutationFunction<SimpleChatMutation, SimpleChatMutationVariables>;

/**
 * __useSimpleChatMutation__
 *
 * To run a mutation, you first call `useSimpleChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSimpleChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [simpleChatMutation, { data, loading, error }] = useSimpleChatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSimpleChatMutation(baseOptions?: Apollo.MutationHookOptions<SimpleChatMutation, SimpleChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SimpleChatMutation, SimpleChatMutationVariables>(SimpleChatDocument, options);
      }
export type SimpleChatMutationHookResult = ReturnType<typeof useSimpleChatMutation>;
export type SimpleChatMutationResult = Apollo.MutationResult<SimpleChatMutation>;
export type SimpleChatMutationOptions = Apollo.BaseMutationOptions<SimpleChatMutation, SimpleChatMutationVariables>;
export const CreateMindmapDocument = gql`
    mutation CreateMindmap($input: ClientCreateMindMapDTO!) {
  createMindmap(input: $input) {
    created_at
    data {
      edges {
        animated
        data {
          label
        }
        id
        source
        target
      }
    }
    id
    summary
    updated_at
    workspaceId
  }
}
    `;
export type CreateMindmapMutationFn = Apollo.MutationFunction<CreateMindmapMutation, CreateMindmapMutationVariables>;

/**
 * __useCreateMindmapMutation__
 *
 * To run a mutation, you first call `useCreateMindmapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMindmapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMindmapMutation, { data, loading, error }] = useCreateMindmapMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMindmapMutation(baseOptions?: Apollo.MutationHookOptions<CreateMindmapMutation, CreateMindmapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMindmapMutation, CreateMindmapMutationVariables>(CreateMindmapDocument, options);
      }
export type CreateMindmapMutationHookResult = ReturnType<typeof useCreateMindmapMutation>;
export type CreateMindmapMutationResult = Apollo.MutationResult<CreateMindmapMutation>;
export type CreateMindmapMutationOptions = Apollo.BaseMutationOptions<CreateMindmapMutation, CreateMindmapMutationVariables>;
export const CreateWorkspaceDocument = gql`
    mutation CreateWorkspace($input: ClientCreateWorkspaceDto!) {
  createWorkspace(input: $input) {
    avatarKey
    createdAt
    id
    name
  }
}
    `;
export type CreateWorkspaceMutationFn = Apollo.MutationFunction<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, options);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export type CreateWorkspaceMutationResult = Apollo.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const DeleteWorkspaceDocument = gql`
    mutation DeleteWorkspace {
  deleteWorkspace {
    message
    success
  }
}
    `;
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>(DeleteWorkspaceDocument, options);
      }
export type DeleteWorkspaceMutationHookResult = ReturnType<typeof useDeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationResult = Apollo.MutationResult<DeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;
export const UpdateWorkspaceDocument = gql`
    mutation UpdateWorkspace($input: ClientUpdateWorkspaceDto!) {
  updateWorkspace(input: $input) {
    message
    success
  }
}
    `;
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(UpdateWorkspaceDocument, options);
      }
export type UpdateWorkspaceMutationHookResult = ReturnType<typeof useUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationResult = Apollo.MutationResult<UpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;
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