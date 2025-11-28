"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Loader2, Send, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  IInputMessage,
  IMessage,
} from "@/app/(private)/workspace/[workspaceId]/chat/[sessionId]/page";
import { AITextBox } from "./components/AITextBox";
import { UserTextBox } from "./components/UserTextBox";
import { SearchingAvatar } from "./components/SearchingAvatar";

interface IChatBoxProps {
  messages: IMessage[];
  register: UseFormRegister<IInputMessage>;
  isLoading: boolean;
}

const ChatBox = ({ messages, register, isLoading }: IChatBoxProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-screen">
      <ScrollArea className="flex-1 overflow-y-auto pb-10" ref={scrollRef}>
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="space-y-8">
            {messages.map((message) =>
              message.role === "assistant" ? (
                <AITextBox key={message.id} message={message} />
              ) : (
                <UserTextBox key={message.id} message={message} />
              )
            )}
            {isLoading && <SearchingAvatar />}
          </div>
        </div>
      </ScrollArea>

      <div className="transparent sticky bottom-0 w-full">
        <div className="flex flex-col justify-center items-center w-full px-4 py-4">
          <div className="bg-card/30 backdrop-blur-xl relative max-w-3xl w-full flex items-end gap-2 rounded-2xl border border-border/50 p-2 focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/50">
            <Textarea
              placeholder="Ask about research papers, topics, or concepts..."
              className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent px-3 py-3 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isLoading}
              {...register("content", { required: true })}
            />
            <Button
              type="submit"
              size="icon"
              className="cursor-pointer h-10 w-10 shrink-0 rounded-xl bg-linear-to-br from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Powered by RAG technology for accurate, source-backed responses
          </p>
        </div>
      </div>
    </div>
  );
};

export { ChatBox };
