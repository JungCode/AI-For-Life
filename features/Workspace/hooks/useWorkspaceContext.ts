import { WorkspaceContext } from "@/app/(private)/workspace/page";
import { useContext } from "react";

export function useWorkspaceContext() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx)
    throw new Error(
      "useWorkspaceContext must be used inside WorkspaceContext.Provider"
    );
  return ctx;
}
