import { Button } from "@/components/ui/button";
import { PanelLeft, PanelLeftClose } from "lucide-react";
import React from "react";

interface IHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isSidebarOpen, setIsSidebarOpen }: IHeaderProps) => {
  return (
    <header className="flex h-14 items-center gap-2 border-b border-border/50 bg-card/30 px-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <PanelLeftClose className="h-5 w-5" />
        ) : (
          <PanelLeft className="h-5 w-5" />
        )}
      </Button>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">
          Nhan GPT 1.0
        </span>
      </div>
    </header>
  );
};

export { Header };
