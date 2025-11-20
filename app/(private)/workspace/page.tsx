"use client";

import { WorkspaceList } from "@/features/Workspace/components/WorkspaceList";
import { EditWorkspaceModal } from "@/features/Workspace/components/EditWorkspaceModal";
import { createContext, useState } from "react";
import { Sidebar } from "@/features/Workspace/layout/Sidebar";
import Header from "@/features/Workspace/layout/Header";
import { CreateWorkspaceModal } from "@/features/Workspace/components/CreateWorkspaceModal";

interface ChatSession {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  participants: number;
  messages: number;
}

export interface Workspace {
  id: string;
  name: string;
  description: string;
  color: string;
  members: number;
  sessions: ChatSession[];
}

interface WorkspaceContextType {
  searchQuery: string;
  selectedWorkspace: Workspace | null;
  isCreateModalOpen: boolean;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedWorkspace: React.Dispatch<React.SetStateAction<Workspace | null>>;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkspaceContext = createContext<WorkspaceContextType | null>(
  null
);

export default function WorkspacesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace | null>(
    null
  );

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
      description: "Technical discussions and code revieworkspace",
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
      description: "Team processes and workfloworkspace",
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
          preview: "Key insights from recent intervieworkspace...",
          timestamp: "6 hours ago",
          participants: 2,
          messages: 8,
        },
      ],
    },
  ];

  const filteredWorkspaces = workspaces.filter(
    (workspace) =>
      workspace.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workspace.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WorkspaceContext.Provider
      value={{
        searchQuery,
        selectedWorkspace,
        isCreateModalOpen,

        setSearchQuery,
        setSelectedWorkspace,
        setIsCreateModalOpen,
      }}
    >
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="relative z-10 flex h-screen">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto px-8 py-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                All Workspaces
              </h3>
              <WorkspaceList workspaces={filteredWorkspaces} />
            </div>
          </div>
        </div>
      </main>
      <EditWorkspaceModal
        workspace={selectedWorkspace}
        isOpen={!!selectedWorkspace}
        onClose={() => setSelectedWorkspace(null)}
      />
      <CreateWorkspaceModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </WorkspaceContext.Provider>
  );
}
