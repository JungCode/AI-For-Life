"use client";

import React from "react";
import {
  Mic,
  Video,
  Network,
  FileText,
  CreditCard,
  HelpCircle,
  BarChart3,
  Presentation,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const studioFeatures = [
  {
    icon: Mic,
    label: "Audio Overview",
    description: "Generate audio summaries",
  },
  {
    icon: Video,
    label: "Video Overview",
    description: "Create video presentations",
  },
  {
    icon: Network,
    label: "Mind Map",
    description: "Visualize connections",
  },
  {
    icon: FileText,
    label: "Reports",
    description: "Generate detailed reports",
  },
  {
    icon: CreditCard,
    label: "Flashcards",
    description: "Create study flashcards",
  },
  {
    icon: HelpCircle,
    label: "Quiz",
    description: "Generate practice quizzes",
  },
  {
    icon: BarChart3,
    label: "Infographic",
    description: "Design visual infographics",
  },
  {
    icon: Presentation,
    label: "Slide Deck",
    description: "Build presentation slides",
  },
];

export const StudioPanel = () => {
  return (
    <div className="w-80 bg-black/60 backdrop-blur-md flex flex-col h-full border border-white/10 rounded-2xl overflow-hidden relative">
      {/* Content */}
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold">Studio</h2>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-3">
          {studioFeatures.map((feature) => (
            <button
              key={feature.label}
              className="p-4 rounded-lg border border-white/10 bg-black/40 text-left group opacity-50 cursor-not-allowed"
              disabled
            >
              <feature.icon className="h-5 w-5 mb-2 text-purple-400" />
              <h3 className="text-sm font-medium mb-1">{feature.label}</h3>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </button>
          ))}
        </div>

        {/* Coming Soon Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground italic">coming soon...</p>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-white/10 text-center">
        <p className="text-sm text-muted-foreground">
          Studio output will be saved here.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          After adding sources, click to add Audio Overview, Study Guide, Mind
          Map, and more!
        </p>
      </div>
    </div>
  );
};
