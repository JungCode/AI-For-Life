"use client";

import { MessageSquare, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

// TODO: remove this mock import
import { IChatSession } from "@/app/(private)/workspace/[workspaceId]/chat/[sessionId]/page";

interface IChatSessionListProps {
  chatSessions: IChatSession[];
  currentSessionId: string | string[];
  currentWorkspaceId: string | string[];
}

const ChatSessionList = ({
  chatSessions,
  currentSessionId,
  currentWorkspaceId,
}: IChatSessionListProps) => {
  const router = useRouter();

  const handleChangeSession = (sessionId: string) => () => {
    if (sessionId === currentSessionId) return;

    router.push(`/workspace/${currentWorkspaceId}/chat/${sessionId}`);
  };

  const handleDeleteSession = (sessionId: string) => () => {
    if (sessionId === currentSessionId) {
      router.replace(`/workspace/${currentWorkspaceId}/chat`);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 border-b border-border/50">
      <div className="px-4 py-2 border-b border-border/50">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Sessions
        </h3>
      </div>
      <ScrollArea className="flex-1 px-3 w-full">
        <div className="space-y-1 py-2">
          <TooltipProvider>
            {chatSessions.map((session) => (
              <div
                key={session.id}
                className={`group relative flex items-center rounded-lg transition-all hover:bg-accent ${
                  currentSessionId === session.id ? "bg-accent" : ""
                }`}
              >
                <button
                  onClick={handleChangeSession(session.id)}
                  className="cursor-pointer flex items-start gap-2 flex-1 w-full p-3 text-left"
                >
                  <MessageSquare className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                  <div className="flex-1 w-full">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="font-medium truncate text-foreground text-sm w-36">
                          {session.title}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="max-w-xs bg-popover text-popover-foreground border-border shadow-lg"
                      >
                        <p className="text-sm">{session.title}</p>
                      </TooltipContent>
                    </Tooltip>
                    <div className="text-xs text-muted-foreground truncate w-36">
                      {session.lastMessage}
                    </div>
                  </div>
                </button>

                <button
                  onClick={handleDeleteSession(session.id)}
                  className="cursor-pointer shrink-0 p-3 opacity-100 group-hover:opacity-100 transition-opacity"
                  aria-label="Delete chat"
                >
                  <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive transition-colors" />
                </button>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </ScrollArea>
    </div>
  );
};

export { ChatSessionList };
