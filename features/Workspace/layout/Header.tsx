import { Plus, Search } from "lucide-react";
import React from "react";

import { useWorkspaceContext } from "../hooks/useWorkspaceContext";

const Header = () => {
  const { searchQuery, setSearchQuery, setIsCreateModalOpen } =
    useWorkspaceContext();

  return (
    <div className="bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-foreground">Workspaces</h2>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 rounded-lg font-semibold transition-all duration-300"
          >
            <Plus size={20} />
            Create workspace
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-4 top-3 text-muted-foreground"
            size={20}
          />
          <input
            type="text"
            placeholder="Search workspaces..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
