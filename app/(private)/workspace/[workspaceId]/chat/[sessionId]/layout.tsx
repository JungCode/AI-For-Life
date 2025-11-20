"use client";

import { Header } from "@/features/Chat/layout/Header";
import { Sidebar } from "@/features/Chat/layout/Sidebar";
import React, { createContext, useState } from "react";

export interface IChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

interface ChatContextType {
  chatSessions: IChatSession[];
  setChatSessions: React.Dispatch<React.SetStateAction<IChatSession[]>>;
}

const chatSessionsMock: IChatSession[] = [
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
];

export const ChatContext = createContext<ChatContextType | null>(null);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chatSessions, setChatSessions] =
    useState<IChatSession[]>(chatSessionsMock);

  return (
    <ChatContext.Provider value={{ chatSessions, setChatSessions }}>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar isSidebarOpen={isSidebarOpen} chatSessions={chatSessions} />

        <div className="flex flex-1 flex-col overflow-hidden">
          <Header
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          {children}
        </div>
      </div>
    </ChatContext.Provider>
  );
};

export default Layout;
