import { useContext } from "react";

import { ChatContext } from "@/app/(private)/workspace/[workspaceId]/chat/[sessionId]/layout";

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx)
    throw new Error("useChatContext must be used inside ChatContext.Provider");
  return ctx;
}
