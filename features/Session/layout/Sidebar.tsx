"use client";

import { Plus, Home, MessageSquare, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MindMapList, IMindMap } from "./Sidebar/MindMapList";

// TODO: remove this mock import
import { IChatSession } from "@/app/(private)/workspace/[workspaceId]/chat/[sessionId]/page";

interface ISidebarProps {
  isSidebarOpen: boolean;
  chatSessions: IChatSession[];
}

const Sidebar = ({ isSidebarOpen, chatSessions }: ISidebarProps) => {
  const { sessionId: currentSessionId, workspaceId: currentWorkspaceId } =
    useParams();
  const router = useRouter();

  // TODO: Replace with actual mind map data from API
  const mockMindMaps: IMindMap[] = [
    {
      id: "1",
      title: "AI Research Overview",
      description: "Key concepts in artificial intelligence",
      timestamp: new Date(),
    },
    {
      id: "2",
      title: "RAG Architecture",
      description: "Retrieval-Augmented Generation system design",
      timestamp: new Date(),
    },
    {
      id: "3",
      title: "Neural Networks",
      description: "Deep learning fundamentals",
      timestamp: new Date(),
    },
  ];

  const handleChangeSession = (sessionId: string) => () => {
    if (sessionId === currentSessionId) return;

    router.push(`/workspace/${currentWorkspaceId}/chat/${sessionId}`);
  };

  const handleDeleteSession = (sessionId: string) => () => {
    if (sessionId === currentSessionId) {
      router.replace(`/workspace/${currentWorkspaceId}/chat`);
    }
  };

  const handleOpenNewChat = () => () => {
    router.push(`/workspace/${currentWorkspaceId}/chat/new-chat`);
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-0"
      } shrink-0 border-r border-border/50 bg-card/30 transition-all duration-300 overflow-hidden`}
    >
      <div className="flex h-full flex-col">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-border/50 p-4">
          <div className="flex items-center gap-2">
            <Link href={"/"} className="font-semibold text-sm">
              <span className="font-bold">
                <span className="text-red-500">V</span>
                <span className="text-yellow-400">K</span>
                <span className="text-blue-500">U </span> ClickSolve
              </span>
            </Link>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <Button
            onClick={handleOpenNewChat()}
            className="w-full justify-start gap-2 bg-linear-to-br from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
            size="sm"
          >
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>

        {/* Section 1: Chat Sessions */}
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

        {/* Section 2: Mind Maps */}
        <MindMapList mindMaps={mockMindMaps} />

        {/* Sidebar Footer */}
        <div className="border-t border-border/50 p-3">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2"
            asChild
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
