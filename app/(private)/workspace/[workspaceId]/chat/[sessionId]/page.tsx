"use client";

import type React from "react";

import { ChatBox } from "@/features/Session/page/Chat/components/ChatBox";
import { useChatPageManagement } from "@/features/Session/page/Chat/hooks/useChatPageManagement";

export interface IChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

export default function ChatPage() {
  const { scrollRef, messages, isLoading, register, handleSubmit, onSubmit } =
    useChatPageManagement();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-hidden">
      <ChatBox
        scrollRef={scrollRef}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        messages={messages}
        isLoading={isLoading}
      />
    </form>
  );
}
