"use client";

import { Plus, Home } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

// TODO: remove this mock import
import { IChatSession } from "@/app/(private)/workspace/[workspaceId]/chat/[sessionId]/page";
import { ChatSessionList } from "./ChatSessionList";
import { MindMapList } from "./MindMapList";

interface ISidebarProps {
  isSidebarOpen: boolean;
  chatSessions: IChatSession[];
}

const Sidebar = ({ isSidebarOpen, chatSessions }: ISidebarProps) => {
  const { sessionId: currentSessionId, workspaceId: currentWorkspaceId } =
    useParams();
  const router = useRouter();

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

        {/* Chat Sessions List */}
        <ChatSessionList
          chatSessions={chatSessions}
          currentWorkspaceId={currentWorkspaceId}
          currentSessionId={currentSessionId}
        />

        {/* Mind Maps List */}
        <MindMapList />

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
