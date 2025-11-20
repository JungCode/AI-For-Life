import { IChatSession } from "@/app/(private)/workspace/[workspaceId]/chat/[sessionId]/page";
import { createContext } from "react";

interface ChatContextType {
  chatSessions: IChatSession[];
  setChatSessions: React.Dispatch<React.SetStateAction<IChatSession[]>>;
}
export const ChatContext = createContext<ChatContextType | null>(null);
