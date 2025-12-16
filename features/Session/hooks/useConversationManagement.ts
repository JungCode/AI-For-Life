import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  GetConversationsDocument,
  useDeleteConversationMutation,
  useGetConversationsQuery,
  useUpdateConversationMutation,
} from "@/shared/generated/schemas";

interface UseConversationManagementProps {
  currentWorkspaceId: string | string[];
  currentSessionId: string | string[];
}

export const useConversationManagement = ({
  currentWorkspaceId,
  currentSessionId,
}: UseConversationManagementProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const mutationContext = {
    headers: {
      "x-workspace-id": currentWorkspaceId,
    },
  };

  const { data: chatConversations, loading } = useGetConversationsQuery({
    context: mutationContext,
  });

  const [deleteConversation] = useDeleteConversationMutation({
    context: mutationContext,
    refetchQueries: [GetConversationsDocument],
    onCompleted: () => {
      toast.success("Delete conversation successfully!");
      setDeletingId(null);
    },
    onError: (error) => {
      toast.error(`Error deleting conversation: ${error.message}`);
      setDeletingId(null);
    },
  });

  const [updateConversation] = useUpdateConversationMutation({
    context: mutationContext,
    refetchQueries: [GetConversationsDocument],
    onCompleted: () => {
      toast.success("Update conversation successfully!");
      setUpdatingId(null);
    },
    onError: (error) => {
      toast.error(`Error updating conversation: ${error.message}`);
      setUpdatingId(null);
    },
  });

  const handleChangeSession = (sessionId: string) => () => {
    if (sessionId === currentSessionId) return;
    router.push(`/workspace/${currentWorkspaceId}/chat/${sessionId}`);
  };

  const handleDeleteSession = (sessionId: string) => () => {
    setDeletingId(sessionId);
    deleteConversation({
      variables: {
        input: {
          conversationId: sessionId,
        },
      },
    });
    if (sessionId === currentSessionId) {
      router.replace(`/workspace/${currentWorkspaceId}/chat`);
    }
  };

  const handleUpdateSession = (sessionId: string) => (title: string) => {
    setUpdatingId(sessionId);
    updateConversation({
      variables: {
        input: {
          conversationId: sessionId,
          title: title,
        },
      },
    });
  };

  return {
    chatConversations,
    loading,
    deletingId,
    updatingId,
    handleChangeSession,
    handleDeleteSession,
    handleUpdateSession,
  };
};
