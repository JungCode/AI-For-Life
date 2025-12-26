"use client";

import type React from "react";

import { ChatBox } from "@/features/Session/page/Chat/components/ChatBox";
import { SourcesPanel } from "@/features/Session/page/Chat/components/SourcesPanel";
import { StudioPanel } from "@/features/Session/page/Chat/components/StudioPanel";
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
    <div className="h-screen overflow-hidden relative">

      {/* Container for 3 sections */}
      <div className="flex h-full gap-4 p-4">
        {/* Left Panel - Sources */}
        <SourcesPanel />

        {/* Middle Panel - Chat */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 overflow-hidden flex flex-col"
          >
            <ChatBox
              scrollRef={scrollRef}
              onSubmit={handleSubmit(onSubmit)}
              register={register}
              messages={messages}
              isLoading={isLoading}
            />
          </form>
        </div>

        {/* Right Panel - Studio */}
        <StudioPanel />
      </div>
    </div>
  );
}
