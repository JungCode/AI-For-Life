"use client";

import { Header } from "@/features/Session/layout/Header";
import { Sidebar } from "@/features/Session/layout/Sidebar";
import { ChatContext } from "@/shared/context/ChatContext";
import { ResearchAgentRequestDto } from "@/shared/generated/schemas";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [initialMessage, setInitialMessage] = useState<
    ResearchAgentRequestDto["message"] | undefined
  >(undefined);

  return (
    <ChatContext.Provider value={{ initialMessage, setInitialMessage }}>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

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
