import { HelpCircle, LogOut, MessageSquare, Settings, Zap } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-background/95 backdrop-blur-xl border-r border-border flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-foreground">
          <span className="text-red-500">V</span>
          <span className="text-yellow-400">K</span>
          <span className="text-blue-500">U </span>
          ClickSolve
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-linear-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 text-purple-400 font-medium hover:from-purple-500/20 hover:to-emerald-500/20 transition-all">
          <MessageSquare size={20} />
          Workspaces
        </button>

        <hr className="border-white/5 my-4" />

        {/* Utilities Section */}
        <div className="px-2 py-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Utilities
          </p>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-all text-sm">
              <Zap size={18} />
              Quick Access
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-all text-sm">
              <HelpCircle size={18} />
              Help & Support
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-all text-sm">
              <Settings size={18} />
              Settings
            </button>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-white/5 p-4">
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-300 transition-all text-sm">
          <LogOut size={18} />
          Log out
        </button>
      </div>
    </aside>
  );
};

export { Sidebar };
