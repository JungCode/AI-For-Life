"use client";

import type React from "react";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Sparkles,
  FileText,
  ExternalLink,
  Loader2,
  Plus,
  Home,
  MessageSquare,
  Trash2,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Array<{
    title: string;
    url: string;
    snippet: string;
  }>;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

const suggestedPrompts = [
  "Explain RAG architecture in research",
  "How to evaluate paper credibility?",
  "Latest trends in machine learning",
  "Compare transformer models",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "RAG Architecture Discussion",
      lastMessage: "Explain RAG architecture in research",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      title: "Machine Learning Trends",
      lastMessage: "Latest trends in machine learning",
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: "3",
      title: "Paper Evaluation Methods",
      lastMessage: "How to evaluate paper credibility?",
      timestamp: new Date(Date.now() - 86400000),
    },
  ]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (prompt?: string) => {
    const messageContent = prompt || input;
    if (!messageContent.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    if (messages.length === 0 && !currentSessionId) {
      const newSession: ChatSession = {
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
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Based on your query about "${messageContent}", here's what I found:\n\nThe Retrieval-Augmented Generation (RAG) model combines the power of large language models with external knowledge retrieval. This approach significantly improves the accuracy and credibility of AI responses by grounding them in verified sources.\n\nKey benefits include:\n• Enhanced factual accuracy through source verification\n• Reduced hallucinations in AI responses\n• Transparent citation of research materials\n• Real-time access to updated information`,
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
            snippet:
              "Credibility assessment involves analyzing citation patterns...",
          },
          {
            title: "AI in Academic Research",
            url: "https://example.com/ai-research",
            snippet:
              "Modern AI assistants leverage RAG to provide accurate information...",
          },
        ],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentSessionId(null);
  };

  const handleDeleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatSessions((prev) => prev.filter((s) => s.id !== sessionId));
    if (currentSessionId === sessionId) {
      handleNewChat();
    }
  };

  const handleLoadSession = (sessionId: string) => {
    setCurrentSessionId(sessionId);
    // In a real app, you would load the messages for this session
    setMessages([]);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } flex-shrink-0 border-r border-border/50 bg-card/30 transition-all duration-300 overflow-hidden`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-border/50 p-4">
            <div className="flex items-center gap-2">
              <Link href={"/"} className="font-semibold text-sm">
                <span className="font-bold">
                  <span className="text-red-500">V</span>
                  <span className="text-yellow-400">K</span>
                  <span className="text-blue-500">U </span> ClickSolve
                </span>
              </Link>
            </div>
          </div>

          {/* New Chat Button */}
          <div className="p-3">
            <Button
              onClick={handleNewChat}
              className="w-full justify-start gap-2 bg-gradient-to-br from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
              size="sm"
            >
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </div>

          {/* Chat Sessions */}
          <ScrollArea className="flex-1 px-3 w-full">
            <div className="space-y-1 py-2">
              <TooltipProvider>
                {chatSessions.map((session) => (
                  <div
                    key={session.id}
                    className={`group relative flex items-center rounded-lg transition-all hover:bg-accent ${
                      currentSessionId === session.id ? "bg-accent" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleLoadSession(session.id)}
                      className="flex items-start gap-2 flex-1 w-full p-3 text-left"
                    >
                      <MessageSquare className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                      <div className="flex-1 w-full">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="font-medium truncate text-foreground text-sm w-36">
                              {session.title}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            side="right"
                            className="max-w-xs bg-popover text-popover-foreground border-border shadow-lg"
                          >
                            <p className="text-sm">{session.title}</p>
                          </TooltipContent>
                        </Tooltip>
                        <div className="text-xs text-muted-foreground truncate w-36">
                          {session.lastMessage}
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={(e) => handleDeleteSession(session.id, e)}
                      className="shrink-0 p-3 opacity-100 group-hover:opacity-100 transition-opacity"
                      aria-label="Delete chat"
                    >
                      <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive transition-colors" />
                    </button>
                  </div>
                ))}
              </TooltipProvider>
            </div>
          </ScrollArea>

          {/* Sidebar Footer */}
          <div className="border-t border-border/50 p-3">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-2 border-b border-border/50 bg-card/30 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeft className="h-5 w-5" />
            )}
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              {currentSessionId
                ? chatSessions.find((s) => s.id === currentSessionId)?.title
                : "New Chat"}
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-hidden">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center px-4">
              <div className="w-full max-w-2xl space-y-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 ring-1 ring-purple-500/30">
                    <Sparkles className="h-10 w-10 text-purple-400" />
                  </div>
                  <div className="text-center">
                    <h1 className="mb-2 text-3xl font-bold text-balance">
                      What would you like to research?
                    </h1>
                    <p className="text-muted-foreground text-balance">
                      Ask me anything about academic papers, research topics, or
                      scientific concepts
                    </p>
                  </div>
                </div>
                <div className="grid w-full gap-3 sm:grid-cols-2">
                  {suggestedPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSubmit(prompt)}
                      className="rounded-xl border border-border/50 bg-card/50 p-4 text-left text-sm transition-all hover:border-purple-500/50 hover:bg-card"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="relative flex items-end gap-2 rounded-2xl border border-border/50 bg-card/30 p-2 focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/50">
                  <Textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about research papers, topics, or concepts..."
                    className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent px-3 py-3 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={() => handleSubmit()}
                    disabled={!input.trim() || isLoading}
                    size="icon"
                    className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  Powered by RAG technology for accurate, source-backed
                  responses
                </p>
              </div>
            </div>
          ) : (
            <>
              <ScrollArea className="h-full" ref={scrollRef}>
                <div className="mx-auto max-w-3xl px-4 py-8">
                  <div className="space-y-8">
                    {messages.map((message) => (
                      <div key={message.id} className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-8 w-8 shrink-0">
                            <AvatarFallback
                              className={
                                message.role === "user"
                                  ? "bg-muted"
                                  : "bg-gradient-to-br from-purple-500 to-teal-500"
                              }
                            >
                              {message.role === "user" ? (
                                "U"
                              ) : (
                                <Sparkles className="h-4 w-4" />
                              )}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="text-sm font-medium">
                              {message.role === "user" ? "You" : "Research AI"}
                            </div>
                            <div className="prose prose-invert max-w-none text-sm leading-relaxed">
                              {message.content.split("\n").map((line, i) => (
                                <p key={i} className="mb-2 last:mb-0">
                                  {line}
                                </p>
                              ))}
                            </div>
                            {message.sources && (
                              <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                  <FileText className="h-3.5 w-3.5" />
                                  Sources
                                </div>
                                <div className="grid gap-2">
                                  {message.sources.map((source, i) => (
                                    <a
                                      key={i}
                                      href={source.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group flex items-start gap-3 rounded-lg border border-border/50 bg-card/30 p-3 transition-all hover:border-purple-500/50 hover:bg-card/50"
                                    >
                                      <Badge
                                        variant="outline"
                                        className="shrink-0 text-xs"
                                      >
                                        {i + 1}
                                      </Badge>
                                      <div className="flex-1 space-y-1">
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                          {source.title}
                                          <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                        </div>
                                        <p className="text-xs text-muted-foreground line-clamp-2">
                                          {source.snippet}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8 shrink-0">
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-teal-500">
                            <Sparkles className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="text-sm font-medium">Research AI</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Searching research papers...
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollArea>

              <div className="border-t border-border/50 bg-card/30 backdrop-blur-xl">
                <div className="mx-auto max-w-3xl px-4 py-4">
                  <div className="relative flex items-end gap-2 rounded-2xl border border-border/50 bg-card/30 p-2 focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/50">
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about research papers, topics, or concepts..."
                      className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent px-3 py-3 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={() => handleSubmit()}
                      disabled={!input.trim() || isLoading}
                      size="icon"
                      className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    Powered by RAG technology for accurate, source-backed
                    responses
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
