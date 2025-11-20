"use client";

import { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import type React from "react";

import { InstructionChat } from "@/features/Chat/page/Chat/components/InstructionChat";
import { ChatBox } from "@/features/Chat/page/Chat/components/ChatBox";
import { useChatContext } from "@/features/Chat/hooks/useChatContext";

const aiMessage: IMessage = {
  id: (Date.now() + 1).toString(),
  role: "assistant",
  content: `Based on your query about that, here's what I found:\n\nThe Retrieval-Augmented Generation (RAG) model combines the power of large language models with external knowledge retrieval. This approach significantly improves the accuracy and credibility of AI responses by grounding them in verified sources.\n\nKey benefits include:\n• Enhanced factual accuracy through source verification\n• Reduced hallucinations in AI responses\n• Transparent citation of research materials\n• Real-time access to updated informationBased on your query about that, here's what I found:\n\nThe Retrieval-Augmented Generation (RAG) model combines the power of large language models with external knowledge retrieval. This approach significantly improves the accuracy and credibility of AI responses by grounding them in verified sources.\n\nKey benefits include:\n• Enhanced factual accuracy through source verification\n• Reduced hallucinations in AI responses\n• Transparent citation of research materials\n• Real-time access to updated informationBased on your query about that, here's what I found:\n\nThe Retrieval-Augmented Generation (RAG) model combines the power of large language models with external knowledge retrieval. This approach significantly improves the accuracy and credibility of AI responses by grounding them in verified sources.\n\nKey benefits include:\n• Enhanced factual accuracy through source verification\n• Reduced hallucinations in AI responses\n• Transparent citation of research materials\n• Real-time access to updated information`,
  sources: [
    {
      title: "Understanding RAG: A Comprehensive Guide",
      url: "https://example.com/rag-guide",
      snippet:
        "RAG architecture combines retrieval systems with generative models...",
    },
    {
      title: "Research Paper Evaluation Methods",
      url: "https://example.com/paper-eval",
      snippet: "Credibility assessment involves analyzing citation patterns...",
    },
    {
      title: "AI in Academic Research",
      url: "https://example.com/ai-research",
      snippet:
        "Modern AI assistants leverage RAG to provide accurate information...",
    },
  ],
};

export interface IInputMessage {
  content: string;
}

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
  const [messages, setIMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { setChatSessions } = useChatContext();

  const { register, handleSubmit, setValue } = useForm<IInputMessage>();

  const onSubmit = async (data: IInputMessage) => {
    const messageContent = data.content;
    if (!messageContent.trim() || isLoading) return;

    const userIMessage: IMessage = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
    };

    setIMessages((prev) => [...prev, userIMessage]);
    setIsLoading(true);

    if (messages.length === 0 && !currentSessionId) {
      setValue("content", "");
      // TODO: refectch api instead
      const newSession: IChatSession = {
        id: Date.now().toString(),
        title:
          messageContent.slice(0, 50) +
          (messageContent.length > 50 ? "..." : ""),
        lastMessage: messageContent,
        timestamp: new Date(),
      };
      setChatSessions((prev) => [newSession, ...prev]);
      setCurrentSessionId(newSession.id);
    }

    // Simulate AI response
    setTimeout(() => {
      setIMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-hidden">
      {messages.length === 0 ? (
        <InstructionChat
          setValue={setValue}
          register={register}
          isLoading={isLoading}
        />
      ) : (
        <ChatBox
          register={register}
          messages={messages}
          isLoading={isLoading}
        />
      )}
    </form>
  );
}
