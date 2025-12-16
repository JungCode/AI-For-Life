import { createContext } from "react";
import { ResearchAgentRequestDto } from "../generated/schemas";

interface ChatContextType {
  initialMessage?: ResearchAgentRequestDto["message"];
  setInitialMessage?: React.Dispatch<
    React.SetStateAction<ResearchAgentRequestDto["message"] | undefined>
  >;
}
export const ChatContext = createContext<ChatContextType | null>(null);
