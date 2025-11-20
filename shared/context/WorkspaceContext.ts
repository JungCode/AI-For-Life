import { Workspace } from "@/app/(private)/workspace/page";

import { createContext } from "react";

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
