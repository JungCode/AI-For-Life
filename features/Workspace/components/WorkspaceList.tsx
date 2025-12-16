"use client";

import { Workspace } from "@/app/(private)/workspace/page";
import {
  ChevronRight,
  Loader2,
  MessageCircle,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { useWorkspaceContext } from "../hooks/useWorkspaceContext";
import { useRouter } from "next/navigation";
import { GetWorkspacesQuery } from "@/shared/generated/schemas";
import { EmptyWorkspaceState } from "./EmptyWorkspaceState";

interface IWorkspaceList {
  workspaces: GetWorkspacesQuery["getWorkspaces"];
}

const WorkspaceList = ({ workspaces }: IWorkspaceList) => {
  const { setSelectedWorkspace, setIsCreateModalOpen } = useWorkspaceContext();
  const router = useRouter();
  const [loadingWorkspaceId, setLoadingWorkspaceId] = useState<string>();

  const handleOpenWorkspace = (workspaceId: string) => {
    setLoadingWorkspaceId(workspaceId);
    router.push(`workspace/${workspaceId}/chat`);
  };

  // Empty state
  if (!workspaces || workspaces.length === 0) {
    return (
      <EmptyWorkspaceState
        onCreateWorkspace={() => setIsCreateModalOpen(true)}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workspaces.map((workspace) => (
        <div
          key={workspace.id}
          className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative flex flex-col justify-between h-full p-6 bg-card/80 backdrop-blur-sm">
            {/* Header with icon and member count */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`bg-white w-14 h-14 rounded-xl bg-linear-to-br flex items-center justify-center text-black text-xl font-bold shadow-lg`}
                >
                  {workspace.name.charAt(0)}
                </div>

                <button
                  onClick={() => setSelectedWorkspace(workspace)}
                  className="cursor-pointer flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
                >
                  <Settings size={14} className="text-gray-400 " />
                </button>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit mb-4">
                <Users size={14} className="text-emerald-400" />
                <span className="text-xs text-muted-foreground">
                  {/* {workspace.members} */}
                </span>
              </div>

              {/* Workspace name and description */}
              <h4 className="text-lg font-semibold text-foreground mb-1">
                {workspace.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                {/* {workspace.description} */}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle size={14} className="text-purple-400" />
                  <span className="text-xs font-semibold text-muted-foreground">
                    Recent Sessions
                  </span>
                </div>
                {[
                  {
                    id: "s3",
                    title: "Research Assistant",
                    preview: "We need to refactor the authentication flow",
                    timestamp: "3 hours ago",
                    participants: 6,
                    messages: 42,
                    unit: "messages",
                  },
                  {
                    id: "s4",
                    title: "Mind Map Dynamics",
                    preview: "Performance metrics are looking good",
                    timestamp: "2 days ago",
                    participants: 4,
                    messages: 23,
                    unit: "items",
                  },
                ].map((session) => (
                  <div
                    key={session.id}
                    className="p-3 rounded-lg bg-muted/30 border border-border group/session hover:border-purple-500/30 hover:bg-linear-to-r hover:from-purple-500/10 hover:to-violet-500/5 transition-all"
                  >
                    <p className="text-xs font-medium text-foreground line-clamp-1">
                      {session.title}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-xs text-muted-foreground">
                        {session.timestamp}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {session.messages} {session.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer action */}
            <div>
              <button
                onClick={() => handleOpenWorkspace(workspace.id)}
                disabled={loadingWorkspaceId === workspace.id}
                className="cursor-pointer w-full py-2.5 px-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-foreground font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingWorkspaceId === workspace.id ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Opening...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare size={16} />
                    <span>Open Workspace</span>
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { WorkspaceList };
