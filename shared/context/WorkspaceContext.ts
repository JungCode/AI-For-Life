import { createContext } from "react";
import { GetWorkspacesQuery } from "../generated/schemas";

interface WorkspaceContextType {
  searchQuery: string;
  selectedWorkspace: GetWorkspacesQuery["getWorkspaces"][0] | null;
  isCreateModalOpen: boolean;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedWorkspace: React.Dispatch<
    React.SetStateAction<GetWorkspacesQuery["getWorkspaces"][0] | null>
  >;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkspaceContext = createContext<WorkspaceContextType | null>(
  null
);
