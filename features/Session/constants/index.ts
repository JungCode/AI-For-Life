import { MessageSource } from "@/shared/generated/schemas";

export interface IMessage {
  id: string;
  role: MessageSource;
  content: string;
  sources?: Array<{
    title: string;
    url: string;
    snippet: string;
  }>;
}
