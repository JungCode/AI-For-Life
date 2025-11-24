"use client";

import { WorkspaceList } from "@/features/Workspace/components/WorkspaceList";
import { EditWorkspaceModal } from "@/features/Workspace/components/EditWorkspaceModal";
import { createContext, useState } from "react";
import { Sidebar } from "@/features/Workspace/layout/Sidebar";
import Header from "@/features/Workspace/layout/Header";
import { CreateWorkspaceModal } from "@/features/Workspace/components/CreateWorkspaceModal";
import { WorkspaceContext } from "@/shared/context/WorkspaceContext";
import {
  GetWorkspacesQuery,
  useGetWorkspacesQuery,
} from "@/shared/generated/schemas";
import { Loader2 } from "lucide-react";

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

export default function WorkspacesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<
    GetWorkspacesQuery["getWorkspaces"][0] | null
  >(null);

  const { data, loading } = useGetWorkspacesQuery();
  const workspaces = data?.getWorkspaces;

  const filteredWorkspaces = workspaces?.filter(
    (workspace) =>
      workspace.name.toLowerCase().includes(searchQuery.toLowerCase())
    // workspace.description.toLowerCase().includes(searchQuery.toLowerCase())
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
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated background - same as dashboard */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float-diagonal" />
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-indigo-500/8 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-teal-500/8 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute top-2/3 right-1/6 w-44 h-44 bg-orange-500/8 rounded-full blur-2xl animate-float-diagonal" />
          <div className="absolute top-1/6 left-1/2 w-32 h-32 bg-violet-500/70 rounded-full blur-xl animate-float-fast" />
          <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-emerald-500/70 rounded-full blur-xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/6 w-36 h-36 bg-rose-500/70 rounded-full blur-xl animate-float-diagonal" />
          <div className="absolute bottom-1/2 right-1/2 w-28 h-28 bg-amber-500/70 rounded-full blur-xl animate-float-medium" />
        </div>

        <div className="relative z-10 flex h-screen">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto px-8 py-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                All Workspaces
              </h3>
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
                    <p className="text-muted-foreground">
                      Loading workspaces...
                    </p>
                  </div>
                </div>
              ) : (
                <WorkspaceList workspaces={filteredWorkspaces || []} />
              )}
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
