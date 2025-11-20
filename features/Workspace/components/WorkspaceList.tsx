import { Workspace } from "@/app/(private)/workspace/page";
import {
  ChevronRight,
  MessageCircle,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import { useWorkspaceContext } from "../hooks/useWorkspaceContext";
import Link from "next/link";

interface IWorkspaceList {
  workspaces: Workspace[];
}

const WorkspaceList = ({ workspaces }: IWorkspaceList) => {
  const { setSelectedWorkspace } = useWorkspaceContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workspaces.map((workspace) => (
        <div
          key={workspace.id}
          className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
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

                <button
                  onClick={() => setSelectedWorkspace(workspace)}
                  className="cursor-pointer flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur"
                >
                  <Settings size={14} className="text-white" />
                </button>
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
                    <MessageCircle size={14} className="text-purple-400" />
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
              <Link
                href="workspace/1/chat/1"
                className="cursor-pointer w-full py-2 px-4 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-purple-500/40 flex items-center justify-center gap-2 group-hover:gap-3"
              >
                <MessageSquare size={16} />
                <span>Open Workspace</span>
                <ChevronRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-all"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { WorkspaceList };
