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
import { AnimatedBackground } from "@/shared/components/AnimatedBackground";

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
        <AnimatedBackground />

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
