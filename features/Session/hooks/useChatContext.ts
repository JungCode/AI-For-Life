import { ChatContext } from "@/shared/context/ChatContext";
import { useContext } from "react";

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx)
    throw new Error("useChatContext must be used inside ChatContext.Provider");
  return ctx;
}
