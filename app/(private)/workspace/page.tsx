"use client";

import { useState } from "react";
import {
  Plus,
  MessageSquare,
  Users,
  ChevronRight,
  Search,
  Settings,
  LogOut,
  Zap,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

interface ChatSession {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  participants: number;
  messages: number;
}

interface Workspace {
  id: string;
  name: string;
  description: string;
  color: string;
  members: number;
  sessions: ChatSession[];
}

export default function WorkspacesPage() {
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const workspaces: Workspace[] = [
    {
      id: "1",
      name: "Product Team",
      description: "Building amazing features together",
      color: "from-purple-500 to-indigo-600",
      members: 5,
      sessions: [
        {
          id: "s1",
          title: "Q1 Roadmap Discussion",
          preview: "Let's align on the features for Q1...",
          timestamp: "2 hours ago",
          participants: 4,
          messages: 28,
        },
        {
          id: "s2",
          title: "Design System Review",
          preview: "Can we discuss the new color palette?",
          timestamp: "1 day ago",
          participants: 3,
          messages: 15,
        },
      ],
    },
    {
      id: "2",
      name: "Engineering",
      description: "Technical discussions and code reviews",
      color: "from-cyan-500 to-blue-600",
      members: 8,
      sessions: [
        {
          id: "s3",
          title: "API Architecture Planning",
          preview: "We need to refactor the authentication flow",
          timestamp: "3 hours ago",
          participants: 6,
          messages: 42,
        },
        {
          id: "s4",
          title: "Database Optimization",
          preview: "Performance metrics are looking good",
          timestamp: "2 days ago",
          participants: 4,
          messages: 23,
        },
      ],
    },
    {
      id: "3",
      name: "Design",
      description: "UI/UX collaboration and feedback",
      color: "from-pink-500 to-purple-600",
      members: 3,
      sessions: [
        {
          id: "s5",
          title: "Homepage Redesign",
          preview: "Thoughts on the new hero section?",
          timestamp: "5 hours ago",
          participants: 2,
          messages: 31,
        },
      ],
    },
    {
      id: "4",
      name: "Marketing",
      description: "Campaign planning and execution",
      color: "from-orange-500 to-amber-600",
      members: 4,
      sessions: [
        {
          id: "s6",
          title: "Social Media Strategy Q4",
          preview: "Let's plan our content calendar...",
          timestamp: "4 hours ago",
          participants: 3,
          messages: 18,
        },
      ],
    },
    {
      id: "5",
      name: "Operations",
      description: "Team processes and workflows",
      color: "from-emerald-500 to-teal-600",
      members: 6,
      sessions: [
        {
          id: "s7",
          title: "Q4 Hiring Plan",
          preview: "We need to expand the team...",
          timestamp: "1 day ago",
          participants: 5,
          messages: 12,
        },
      ],
    },
    {
      id: "6",
      name: "Research",
      description: "User research and insights",
      color: "from-violet-500 to-purple-600",
      members: 2,
      sessions: [
        {
          id: "s8",
          title: "User Feedback Analysis",
          preview: "Key insights from recent interviews...",
          timestamp: "6 hours ago",
          participants: 2,
          messages: 8,
        },
      ],
    },
  ];

  const filteredWorkspaces = workspaces.filter(
    (ws) =>
      ws.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeWorkspace = workspaces.find((ws) => ws.id === selectedWorkspace);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="relative z-10 flex h-screen">
        <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-white/5 flex flex-col overflow-hidden">
          {/* Logo */}
          <div className="p-6 border-b border-white/5">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              <span className="text-red-500">V</span>
              <span className="text-yellow-400">K</span>
              <span className="text-blue-500">U </span>
              ClickSolve
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-500/15 border border-purple-500/20 text-purple-300 font-medium hover:bg-purple-500/25 transition-all">
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

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-slate-900/30 backdrop-blur-md border-b border-white/5">
            <div className="px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Workspaces</h2>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                  <Plus size={20} />
                  Create workspace
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-4 top-3 text-gray-600"
                  size={20}
                />
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

          <div className="flex-1 overflow-y-auto px-8 py-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              All Workspaces
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkspaces.map((workspace) => (
                <div
                  key={workspace.id}
                  onClick={() => setSelectedWorkspace(workspace.id)}
                  className="group cursor-pointer relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex flex-col justify-between h-full p-6 bg-slate-800/40 backdrop-blur-sm border border-white/5">
                    {/* Header with icon and member count */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${workspace.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                        >
                          {workspace.name.charAt(0)}
                        </div>

                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur">
                          <Settings size={14} className="text-white" />
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur w-fit mb-4">
                        <Users size={14} className="text-cyan-400" />
                        <span className="text-xs text-gray-300">
                          {workspace.members}
                        </span>
                      </div>

                      {/* Workspace name and description */}
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {workspace.name}
                      </h4>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-1">
                        {workspace.description}
                      </p>

                      {workspace.sessions.length > 0 && (
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <MessageCircle
                              size={14}
                              className="text-purple-400"
                            />
                            <span className="text-xs font-semibold text-gray-300">
                              Recent Sessions
                            </span>
                          </div>
                          {workspace.sessions.slice(0, 2).map((session) => (
                            <div
                              key={session.id}
                              className="p-2 rounded-lg bg-black/30 border border-white/5 group/session hover:border-purple-500/30 transition-all"
                            >
                              <p className="text-xs font-medium text-white line-clamp-1">
                                {session.title}
                              </p>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-gray-500">
                                  {session.timestamp}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {session.messages} messages
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer action */}
                    <div>
                      <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-purple-500/40 flex items-center justify-center gap-2 group-hover:gap-3">
                        <MessageSquare size={16} />
                        Open Workspace
                        <ChevronRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
