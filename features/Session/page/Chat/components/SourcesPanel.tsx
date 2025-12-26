"use client";

import React from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const SourcesPanel = () => {
  return (
    <div className="w-80 bg-black/60 backdrop-blur-md flex flex-col h-full border border-white/10 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Sources</h2>
        </div>

        {/* Add Sources Button */}
        <Button
          variant="outline"
          className="w-full justify-start gap-2 bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 text-purple-300"
        >
          <Plus className="h-4 w-4" />
          Add sources
        </Button>

        {/* Try Deep Research Banner */}
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
          <p className="text-sm">
            <span className="font-semibold text-purple-300">
              Try Deep Research
            </span>{" "}
            <span className="text-muted-foreground">
              for an in-depth report and new sources!
            </span>
          </p>
        </div>

        {/* Search Box */}
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search the web for new sources"
            className="w-full pl-10 pr-4 py-2 text-sm bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500/50"
          />
        </div>
      </div>

      {/* Saved Sources Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
          <div className="p-4 rounded-full bg-muted/50">
            <svg
              className="h-8 w-8 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Saved sources will appear here</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Click Add source above to add PDFs, websites, text, videos, or
              audio files. Or import a file directly from Google Drive.
            </p>
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 text-center">
        <p className="text-xs text-muted-foreground">
          Upload a source to get started
        </p>
        <p className="text-xs text-muted-foreground mt-1">0 sources</p>
      </div>
    </div>
  );
};
