"use client";

import {
  RefreshCw,
  Search,
  ChevronLeft,
  PanelLeft,
  PanelLeftClose,
} from "lucide-react";
import { useParams, useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { ChatSessionList } from "./ChatSessionList";
import { MindMapList } from "./MindMapList";
import {
  NavigationButton,
  getNavigationItems,
  historyItem,
} from "./NavigationButton";

interface ISidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: ISidebarProps) => {
  const { sessionId: currentSessionId, workspaceId: currentWorkspaceId } =
    useParams();
  const router = useRouter();
  const pathname = usePathname();

  const isChatActive = pathname?.endsWith("/chat");

  const handleOpenNewChat = () => {
    router.push(`/workspace/${currentWorkspaceId}/chat`);
  };

  const handleBackToWorkspace = () => {
    router.push("/workspace");
  };

  const navigationItems = getNavigationItems(handleOpenNewChat, isChatActive);

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-0"
      } shrink-0 border-r border-border/50 transition-all duration-300 overflow-hidden bg-black relative z-10`}
    >
      <div className="flex h-full flex-col p-2">
        {/* Top Icon */}
        <div className="flex items-center justify-between p-2 mb-2">
          <div className="font-semibold text-sm">
            <span className="text-red-500">V</span>
            <span className="text-yellow-400">K</span>
            <span className="text-blue-500">U </span>
            ClickSolve
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-white/10"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3 px-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search ⌘K"
            className="pl-9 bg-[#2a2a2a] border-none h-9 text-sm"
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 px-1">
          {navigationItems.map((item) => (
            <NavigationButton key={item.id} item={item} />
          ))}

          {/* History Section */}
          <div className="pt-2 flex flex-col flex-1 min-h-0">
            <NavigationButton item={historyItem} />

            <div className="flex flex-col flex-1 gap-2 mt-1 min-h-0">
              {/* Chat Sessions - Scrollable Half */}
              <div className="flex flex-col flex-1 min-h-0 max-h-[250px]">
                <div className="px-3 py-1.5 text-xs text-muted-foreground">
                  Chats
                </div>
                <div className="overflow-y-auto flex-1 ml-4 border-l-2 border-border/70 pl-3 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <ChatSessionList
                    currentWorkspaceId={currentWorkspaceId}
                    currentSessionId={currentSessionId}
                  />
                </div>
              </div>

              {/* Mind Maps - Scrollable Half */}
              <div className="flex flex-col flex-1 min-h-0 max-h-[250px]">
                <div className="px-3 py-1.5 text-xs text-muted-foreground">
                  Mind Maps
                </div>
                <div className="overflow-y-auto flex-1 ml-4 border-l-2 border-border/70 pl-3 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <MindMapList />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-3 px-1">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-orange-600 text-white text-xs">
                B
              </AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="sm"
              onClick={handleBackToWorkspace}
              className="flex-1 h-8 text-xs border-white/20 hover:bg-white/10"
            >
              Back to workspace
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
