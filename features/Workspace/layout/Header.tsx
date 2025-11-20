import { Plus, Search } from "lucide-react";
import React from "react";

import { useWorkspaceContext } from "../hooks/useWorkspaceContext";

const Header = () => {
  const { searchQuery, setSearchQuery, setIsCreateModalOpen } =
    useWorkspaceContext();

  return (
    <div className="bg-slate-900/30 backdrop-blur-md border-b border-white/5">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Workspaces</h2>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <Plus size={20} />
            Create workspace
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-600" size={20} />
          <input
            type="text"
            placeholder="Search workspaces..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
