import { LucideIcon, PenSquare, Mic, Image, Folder, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface NavigationItem {
  id: string;
  name: string;
  icon: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  badge?: boolean;
  isActive?: boolean;
}

interface NavigationButtonProps {
  item: NavigationItem;
}

export const NavigationButton = ({ item }: NavigationButtonProps) => {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start gap-3 hover:bg-white/10 relative ${
        item.isActive ? "bg-accent" : ""
      }`}
      onClick={item.onClick}
      disabled={item.disabled}
    >
      <item.icon className="h-4 w-4" />
      <span className="text-sm">{item.name}</span>
      {item.badge && (
        <span className="ml-auto h-2 w-2 rounded-full bg-blue-500"></span>
      )}
    </Button>
  );
};

export const getNavigationItems = (
  handleOpenNewChat: () => void,
  isChatActive: boolean
): NavigationItem[] => [
  {
    id: "chat",
    name: "Chat",
    icon: PenSquare,
    onClick: handleOpenNewChat,
    isActive: isChatActive,
  },
  {
    id: "voice",
    name: "Voice mode",
    icon: Mic,
    disabled: true,
  },
  {
    id: "imagine",
    name: "Imagine",
    icon: Image,
    disabled: true,
    badge: true,
  },
  {
    id: "projects",
    name: "Projects",
    icon: Folder,
    disabled: true,
  },
];

export const historyItem: NavigationItem = {
  id: "history",
  name: "History",
  icon: Clock,
};
