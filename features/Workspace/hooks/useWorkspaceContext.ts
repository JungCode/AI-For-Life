import { WorkspaceContext } from "@/shared/context/WorkspaceContext";
import { useContext } from "react";

export function useWorkspaceContext() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx)
    throw new Error(
      "useWorkspaceContext must be used inside WorkspaceContext.Provider"
    );
  return ctx;
}
