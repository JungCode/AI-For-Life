"use client";

import { Loader2, MessageSquare } from "lucide-react";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatConversationItem } from "./ChatConversationItem";
import { useConversationManagement } from "@/features/Session/hooks/useConversationManagement";

interface IChatSessionListProps {
  currentSessionId: string | string[];
  currentWorkspaceId: string | string[];
}

const ChatSessionList = ({
  currentSessionId,
  currentWorkspaceId,
}: IChatSessionListProps) => {
  const {
    chatConversations,
    loading,
    deletingId,
    updatingId,
    handleChangeSession,
    handleDeleteSession,
    handleUpdateSession,
  } = useConversationManagement({
    currentWorkspaceId,
    currentSessionId,
  });

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      );
    }

    if (!chatConversations?.getConversations?.length) {
      return (
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
          <MessageSquare className="h-8 w-8 text-muted-foreground/50 mb-3" />
          <p className="text-sm text-muted-foreground">No conversations yet</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Start a new chat to begin
          </p>
        </div>
      );
    }

    return (
      <TooltipProvider>
        {chatConversations?.getConversations
          ?.slice()
          .reverse()
          .map((session) => (
            <ChatConversationItem
              key={session.id}
              session={session}
              isActive={currentSessionId === session.id}
              onSessionChange={handleChangeSession(session.id)}
              onDelete={handleDeleteSession(session.id)}
              onUpdate={handleUpdateSession(session.id)}
              isDeleting={deletingId === session.id}
              isUpdating={updatingId === session.id}
            />
          ))}
      </TooltipProvider>
    );
  };

  return <div className="space-y-1">{renderContent()}</div>;
};

export { ChatSessionList };
