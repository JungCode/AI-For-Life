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
  createdAt: Scalars['DateTime']['output'];
  data: MindMapData;
  id: Scalars['ID']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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

export type ConversationResponseDto = {
  __typename?: 'ConversationResponseDto';
  context?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspaceId: Scalars['String']['output'];
};

export type CreateConversationRequestDto = {
  title: Scalars['String']['input'];
};

export type DeleteConversationRequestDto = {
  conversationId: Scalars['String']['input'];
};

export type GetMessagesRequestDto = {
  conversationId: Scalars['String']['input'];
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

export type MessageResponseDto = {
  __typename?: 'MessageResponseDto';
  content: Scalars['String']['output'];
  conversationId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  source: MessageSource;
  updatedAt: Scalars['DateTime']['output'];
};

export enum MessageSource {
  Agent = 'AGENT',
  User = 'USER'
}

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
  createConversation: ConversationResponseDto;
  createMindmap: ClientMindMapResponse;
  createWorkspace: IClientWorkspace;
  deleteConversation: ResponseBaseMessage;
  deleteWorkspace: ResponseBaseMessage;
  logIn: LoginResponse;
  logOut: ResponseBaseMessage;
  refreshToken: IClientRefreshTokenResponse;
  researchAgent: ResearchAgentResponseDto;
  signUp: IClientRefreshTokenResponse;
  simpleChat: ClientSimpleChatResponse;
  updateConversation: ResponseBaseMessage;
  updateWorkspace: ResponseBaseMessage;
};


export type MutationCreateConversationArgs = {
  input: CreateConversationRequestDto;
};


export type MutationCreateMindmapArgs = {
  input: ClientCreateMindMapDto;
};


export type MutationCreateWorkspaceArgs = {
  input: ClientCreateWorkspaceDto;
};


export type MutationDeleteConversationArgs = {
  input: DeleteConversationRequestDto;
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


export type MutationResearchAgentArgs = {
  input: ResearchAgentRequestDto;
};


export type MutationSignUpArgs = {
  input: ClientSignUpDto;
};


export type MutationSimpleChatArgs = {
  input: ClientSimpleChatRequest;
};


export type MutationUpdateConversationArgs = {
  input: UpdateConversationRequestDto;
};


export type MutationUpdateWorkspaceArgs = {
  input: ClientUpdateWorkspaceDto;
};

export type Query = {
  __typename?: 'Query';
  getConversations: Array<ConversationResponseDto>;
  getMessages: Array<MessageResponseDto>;
  getMindmapById: ClientMindMapResponse;
  getMindmaps: Array<ClientMindMapResponse>;
  getWorkspaceInfo: IClientWorkspace;
  getWorkspaces: Array<IClientWorkspace>;
};


export type QueryGetMessagesArgs = {
  input: GetMessagesRequestDto;
};


export type QueryGetMindmapByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMindmapsArgs = {
  workspaceId: Scalars['String']['input'];
};

export type RefreshTokenDto = {
  refreshToken: Scalars['String']['input'];
};

export type ResearchAgentRequestDto = {
  message: Scalars['String']['input'];
  threadId: Scalars['String']['input'];
};

export type ResearchAgentResponseDto = {
  __typename?: 'ResearchAgentResponseDto';
  message: Scalars['String']['output'];
};

export type ResponseBaseMessage = {
  __typename?: 'ResponseBaseMessage';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UpdateConversationRequestDto = {
  conversationId: Scalars['String']['input'];
  title: Scalars['String']['input'];
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

export type CreateConversationMutationVariables = Exact<{
  input: CreateConversationRequestDto;
}>;


export type CreateConversationMutation = { __typename?: 'Mutation', createConversation: { __typename?: 'ConversationResponseDto', context?: string | null, createdAt?: any | null, id: string, title: string, updatedAt?: any | null, workspaceId: string } };

export type DeleteConversationMutationVariables = Exact<{
  input: DeleteConversationRequestDto;
}>;


export type DeleteConversationMutation = { __typename?: 'Mutation', deleteConversation: { __typename?: 'ResponseBaseMessage', message?: string | null, success: boolean } };

export type UpdateConversationMutationVariables = Exact<{
  input: UpdateConversationRequestDto;
}>;


export type UpdateConversationMutation = { __typename?: 'Mutation', updateConversation: { __typename?: 'ResponseBaseMessage', message?: string | null, success: boolean } };

export type ResearchAgentMutationVariables = Exact<{
  input: ResearchAgentRequestDto;
}>;


export type ResearchAgentMutation = { __typename?: 'Mutation', researchAgent: { __typename?: 'ResearchAgentResponseDto', message: string } };

export type GetConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConversationsQuery = { __typename?: 'Query', getConversations: Array<{ __typename?: 'ConversationResponseDto', context?: string | null, createdAt?: any | null, id: string, title: string, updatedAt?: any | null, workspaceId: string }> };

export type GetMessagesQueryVariables = Exact<{
  input: GetMessagesRequestDto;
}>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages: Array<{ __typename?: 'MessageResponseDto', content: string, conversationId: string, createdAt: any, id: string, source: MessageSource, updatedAt: any }> };

export type CreateMindmapMutationVariables = Exact<{
  input: ClientCreateMindMapDto;
}>;


export type CreateMindmapMutation = { __typename?: 'Mutation', createMindmap: { __typename?: 'ClientMindMapResponse', createdAt: any, id: string, summary?: string | null, updatedAt: any, workspaceId: string, data: { __typename?: 'MindMapData', edges: Array<{ __typename?: 'MindMapEdge', animated?: boolean | null, id: string, source: string, target: string, data?: { __typename?: 'MindMapNodeData', label?: string | null } | null }> } } };

export type GetMindmapByIdQueryVariables = Exact<{
  getMindmapByIdId: Scalars['String']['input'];
}>;


export type GetMindmapByIdQuery = { __typename?: 'Query', getMindmapById: { __typename?: 'ClientMindMapResponse', summary?: string | null, id: string, workspaceId: string, data: { __typename?: 'MindMapData', edges: Array<{ __typename?: 'MindMapEdge', animated?: boolean | null, id: string, source: string, target: string, data?: { __typename?: 'MindMapNodeData', label?: string | null } | null }>, nodes: Array<{ __typename?: 'MindMapNode', content?: string | null, id: string, data?: { __typename?: 'MindMapNodeData', label?: string | null } | null, position?: { __typename?: 'MindMapPosition', y: number, x: number } | null, style?: { __typename?: 'MindMapStyle', background: string, border: string, borderRadius: string, color: string, fontSize?: string | null, fontWeight?: string | null, padding: string } | null }> } } };

export type GetMindmapsQueryVariables = Exact<{
  workspaceId: Scalars['String']['input'];
}>;


export type GetMindmapsQuery = { __typename?: 'Query', getMindmaps: Array<{ __typename?: 'ClientMindMapResponse', id: string, summary?: string | null, workspaceId: string }> };

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
export const CreateConversationDocument = gql`
    mutation CreateConversation($input: CreateConversationRequestDto!) {
  createConversation(input: $input) {
    context
    createdAt
    id
    title
    updatedAt
    workspaceId
  }
}
    `;
export type CreateConversationMutationFn = Apollo.MutationFunction<CreateConversationMutation, CreateConversationMutationVariables>;

/**
 * __useCreateConversationMutation__
 *
 * To run a mutation, you first call `useCreateConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConversationMutation, { data, loading, error }] = useCreateConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConversationMutation(baseOptions?: Apollo.MutationHookOptions<CreateConversationMutation, CreateConversationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConversationMutation, CreateConversationMutationVariables>(CreateConversationDocument, options);
      }
export type CreateConversationMutationHookResult = ReturnType<typeof useCreateConversationMutation>;
export type CreateConversationMutationResult = Apollo.MutationResult<CreateConversationMutation>;
export type CreateConversationMutationOptions = Apollo.BaseMutationOptions<CreateConversationMutation, CreateConversationMutationVariables>;
export const DeleteConversationDocument = gql`
    mutation DeleteConversation($input: DeleteConversationRequestDto!) {
  deleteConversation(input: $input) {
    message
    success
  }
}
    `;
export type DeleteConversationMutationFn = Apollo.MutationFunction<DeleteConversationMutation, DeleteConversationMutationVariables>;

/**
 * __useDeleteConversationMutation__
 *
 * To run a mutation, you first call `useDeleteConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConversationMutation, { data, loading, error }] = useDeleteConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteConversationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConversationMutation, DeleteConversationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConversationMutation, DeleteConversationMutationVariables>(DeleteConversationDocument, options);
      }
export type DeleteConversationMutationHookResult = ReturnType<typeof useDeleteConversationMutation>;
export type DeleteConversationMutationResult = Apollo.MutationResult<DeleteConversationMutation>;
export type DeleteConversationMutationOptions = Apollo.BaseMutationOptions<DeleteConversationMutation, DeleteConversationMutationVariables>;
export const UpdateConversationDocument = gql`
    mutation UpdateConversation($input: UpdateConversationRequestDto!) {
  updateConversation(input: $input) {
    message
    success
  }
}
    `;
export type UpdateConversationMutationFn = Apollo.MutationFunction<UpdateConversationMutation, UpdateConversationMutationVariables>;

/**
 * __useUpdateConversationMutation__
 *
 * To run a mutation, you first call `useUpdateConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConversationMutation, { data, loading, error }] = useUpdateConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConversationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConversationMutation, UpdateConversationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConversationMutation, UpdateConversationMutationVariables>(UpdateConversationDocument, options);
      }
export type UpdateConversationMutationHookResult = ReturnType<typeof useUpdateConversationMutation>;
export type UpdateConversationMutationResult = Apollo.MutationResult<UpdateConversationMutation>;
export type UpdateConversationMutationOptions = Apollo.BaseMutationOptions<UpdateConversationMutation, UpdateConversationMutationVariables>;
export const ResearchAgentDocument = gql`
    mutation ResearchAgent($input: ResearchAgentRequestDto!) {
  researchAgent(input: $input) {
    message
  }
}
    `;
export type ResearchAgentMutationFn = Apollo.MutationFunction<ResearchAgentMutation, ResearchAgentMutationVariables>;

/**
 * __useResearchAgentMutation__
 *
 * To run a mutation, you first call `useResearchAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResearchAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [researchAgentMutation, { data, loading, error }] = useResearchAgentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResearchAgentMutation(baseOptions?: Apollo.MutationHookOptions<ResearchAgentMutation, ResearchAgentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResearchAgentMutation, ResearchAgentMutationVariables>(ResearchAgentDocument, options);
      }
export type ResearchAgentMutationHookResult = ReturnType<typeof useResearchAgentMutation>;
export type ResearchAgentMutationResult = Apollo.MutationResult<ResearchAgentMutation>;
export type ResearchAgentMutationOptions = Apollo.BaseMutationOptions<ResearchAgentMutation, ResearchAgentMutationVariables>;
export const GetConversationsDocument = gql`
    query GetConversations {
  getConversations {
    context
    createdAt
    id
    title
    updatedAt
    workspaceId
  }
}
    `;

/**
 * __useGetConversationsQuery__
 *
 * To run a query within a React component, call `useGetConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConversationsQuery(baseOptions?: Apollo.QueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
      }
export function useGetConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
        }
export type GetConversationsQueryHookResult = ReturnType<typeof useGetConversationsQuery>;
export type GetConversationsLazyQueryHookResult = ReturnType<typeof useGetConversationsLazyQuery>;
export type GetConversationsQueryResult = Apollo.QueryResult<GetConversationsQuery, GetConversationsQueryVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($input: GetMessagesRequestDto!) {
  getMessages(input: $input) {
    content
    conversationId
    createdAt
    id
    source
    updatedAt
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const CreateMindmapDocument = gql`
    mutation CreateMindmap($input: ClientCreateMindMapDTO!) {
  createMindmap(input: $input) {
    createdAt
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
    updatedAt
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
export const GetMindmapByIdDocument = gql`
    query GetMindmapById($getMindmapByIdId: String!) {
  getMindmapById(id: $getMindmapByIdId) {
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
      nodes {
        content
        data {
          label
        }
        id
        position {
          y
          x
        }
        style {
          background
          border
          borderRadius
          color
          fontSize
          fontWeight
          padding
        }
      }
    }
    summary
    id
    workspaceId
  }
}
    `;

/**
 * __useGetMindmapByIdQuery__
 *
 * To run a query within a React component, call `useGetMindmapByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMindmapByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMindmapByIdQuery({
 *   variables: {
 *      getMindmapByIdId: // value for 'getMindmapByIdId'
 *   },
 * });
 */
export function useGetMindmapByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMindmapByIdQuery, GetMindmapByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMindmapByIdQuery, GetMindmapByIdQueryVariables>(GetMindmapByIdDocument, options);
      }
export function useGetMindmapByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMindmapByIdQuery, GetMindmapByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMindmapByIdQuery, GetMindmapByIdQueryVariables>(GetMindmapByIdDocument, options);
        }
export type GetMindmapByIdQueryHookResult = ReturnType<typeof useGetMindmapByIdQuery>;
export type GetMindmapByIdLazyQueryHookResult = ReturnType<typeof useGetMindmapByIdLazyQuery>;
export type GetMindmapByIdQueryResult = Apollo.QueryResult<GetMindmapByIdQuery, GetMindmapByIdQueryVariables>;
export const GetMindmapsDocument = gql`
    query GetMindmaps($workspaceId: String!) {
  getMindmaps(workspaceId: $workspaceId) {
    id
    summary
    workspaceId
  }
}
    `;

/**
 * __useGetMindmapsQuery__
 *
 * To run a query within a React component, call `useGetMindmapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMindmapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMindmapsQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useGetMindmapsQuery(baseOptions: Apollo.QueryHookOptions<GetMindmapsQuery, GetMindmapsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMindmapsQuery, GetMindmapsQueryVariables>(GetMindmapsDocument, options);
      }
export function useGetMindmapsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMindmapsQuery, GetMindmapsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMindmapsQuery, GetMindmapsQueryVariables>(GetMindmapsDocument, options);
        }
export type GetMindmapsQueryHookResult = ReturnType<typeof useGetMindmapsQuery>;
export type GetMindmapsLazyQueryHookResult = ReturnType<typeof useGetMindmapsLazyQuery>;
export type GetMindmapsQueryResult = Apollo.QueryResult<GetMindmapsQuery, GetMindmapsQueryVariables>;
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