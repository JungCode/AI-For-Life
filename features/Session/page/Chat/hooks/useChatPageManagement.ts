import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";

import { useChatContext } from "@/features/Session/hooks/useChatContext";
import {
  MessageSource,
  ResearchAgentRequestDto,
  useGetMessagesQuery,
  useResearchAgentMutation,
} from "@/shared/generated/schemas";
import { IMessage } from "../../../constants";

export const useChatPageManagement = () => {
  const { sessionId, workspaceId } = useParams();
  const [messages, setMessages] = useState<IMessage[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const initialSentRef = useRef(false);

  const { initialMessage, setInitialMessage } = useChatContext();

  const { register, handleSubmit, setValue } =
    useForm<ResearchAgentRequestDto>();

  useGetMessagesQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: {
        conversationId: sessionId as string,
      },
    },
    context: {
      headers: {
        "x-workspace-id": workspaceId,
      },
    },
    onCompleted: (data) => {
      const messagesData: IMessage[] = data.getMessages.map((message) => ({
        id: message.id,
        role:
          message.source === "USER" ? MessageSource.User : MessageSource.Agent,
        content: message.content,
      }));
      // Only set messages if we haven't sent an initial message
      if (!initialSentRef.current) {
        setMessages(messagesData);
      }
    },
  });

  const [chat, { loading: isLoading }] = useResearchAgentMutation({
    context: {
      headers: {
        "x-workspace-id": workspaceId,
      },
    },
    onCompleted: (data) => {
      setValue("message", "");
      const aiMessage: IMessage = {
        id: Date.now().toString(),
        role: MessageSource.Agent,
        content: data.researchAgent.message,
      };
      setMessages((prev) => [...prev, aiMessage]);
    },
  });

  const onSubmit = async (data: ResearchAgentRequestDto): Promise<void> => {
    const messageContent = data.message;
    if (!messageContent.trim() || isLoading) return;

    const userMessage: IMessage = {
      id: Date.now().toString(),
      role: MessageSource.User,
      content: messageContent,
    };

    chat({
      variables: {
        input: {
          message: messageContent,
          threadId: sessionId as string,
        },
      },
    });

    setMessages((prev) => [...prev, userMessage]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length]);

  useEffect(() => {
    if (!initialMessage) return;
    if (initialSentRef.current) return;

    // Set the flag FIRST to prevent race conditions
    initialSentRef.current = true;
    setInitialMessage?.(undefined);

    const userMessage: IMessage = {
      id: Date.now().toString(),
      role: MessageSource.User,
      content: initialMessage,
    };

    setMessages([userMessage]);

    chat({
      variables: {
        input: {
          message: initialMessage,
          threadId: sessionId as string,
        },
      },
    });
  }, [initialMessage, chat, sessionId, setInitialMessage]);

  return {
    scrollRef,
    messages,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  };
};
