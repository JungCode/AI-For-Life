"use client";

import { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import type React from "react";

import { InstructionChat } from "@/features/Session/page/Chat/components/InstructionChat";
import { ChatBox } from "@/features/Session/page/Chat/components/ChatBox";
import { useChatContext } from "@/features/Session/hooks/useChatContext";
import {
  SimpleChatMutationVariables,
  useSimpleChatMutation,
} from "@/shared/generated/schemas";

export interface IMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Array<{
    title: string;
    url: string;
    snippet: string;
  }>;
}

export interface IChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const { setChatSessions } = useChatContext();

  const { register, handleSubmit, setValue } =
    useForm<SimpleChatMutationVariables["input"]>();

  const [simpleChat, { loading: isLoading }] = useSimpleChatMutation({
    onCompleted: (data) => {
      setValue("message", "");
      const aiMessage: IMessage = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.simpleChat.response,
      };
      setMessages((prev) => [...prev, aiMessage]);
    },
  });

  const onSubmit = async (data: SimpleChatMutationVariables["input"]) => {
    const messageContent = data.message;
    if (!messageContent.trim() || isLoading) return;

    const userMessage: IMessage = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
    };

    simpleChat({
      variables: {
        input: {
          message: messageContent,
          threadId: "asdfasdfas",
        },
      },
    });

    setMessages((prev) => [...prev, userMessage]);

    // if (messages.length === 0 && !currentSessionId) {
    //   setValue("message", "");
    //   // TODO: refectch api instead
    //   const newSession: IChatSession = {
    //     id: Date.now().toString(),
    //     title:
    //       messageContent.slice(0, 50) +
    //       (messageContent.length > 50 ? "..." : ""),
    //     lastMessage: messageContent,
    //     timestamp: new Date(),
    //   };
    //   setChatSessions((prev) => [newSession, ...prev]);
    //   setCurrentSessionId(newSession.id);
    // }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 overflow-hidden bg-card"
    >
      {messages.length === 0 ? (
        <InstructionChat
          onSubmit={handleSubmit(onSubmit)}
          setValue={setValue}
          register={register}
          isLoading={isLoading}
        />
      ) : (
        <ChatBox
          scrollRef={scrollRef}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          messages={messages}
          isLoading={isLoading}
        />
      )}
    </form>
  );
}
