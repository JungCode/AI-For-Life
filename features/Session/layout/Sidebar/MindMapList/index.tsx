"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Network, Trash2, Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { CreateMindMapModal } from "./CreateMindMapModal";

export interface IMindMap {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
}

interface IMindMapListProps {
  mindMaps: IMindMap[] | undefined;
}

const MindMapList = ({ mindMaps }: IMindMapListProps) => {
  const { mindMapId: currentMindMapId, workspaceId: currentWorkspaceId } =
    useParams();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChangeMindMap = (mindMapId: string) => () => {
    if (mindMapId === currentMindMapId) return;

    router.push(`/workspace/${currentWorkspaceId}/mind-map/${mindMapId}`);
  };

  const handleDeleteMindMap = (mindMapId: string) => () => {
    if (mindMapId === currentMindMapId) {
      router.replace(`/workspace/${currentWorkspaceId}/mind-map`);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="px-4 py-2 border-b border-border/50 flex items-center justify-between">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Mind Maps
        </h3>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="cursor-pointer p-1 rounded hover:bg-accent transition-colors"
          aria-label="Create new mind map"
        >
          <Plus className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      <ScrollArea className="flex-1 px-3 w-full">
        <div className="space-y-1 py-2">
          <TooltipProvider>
            {mindMaps && mindMaps.length > 0 ? (
              mindMaps.map((mindMap) => (
                <div
                  key={mindMap.id}
                  className={`group relative flex items-center rounded-lg transition-all hover:bg-accent ${
                    currentMindMapId === mindMap.id ? "bg-accent" : ""
                  }`}
                >
                  <button
                    onClick={handleChangeMindMap(mindMap.id)}
                    className="cursor-pointer flex items-start gap-2 flex-1 w-full p-3 text-left"
                  >
                    <Network className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                    <div className="flex-1 w-full">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="font-medium truncate text-foreground text-sm w-36">
                            {mindMap.title}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="max-w-xs bg-popover text-popover-foreground border-border shadow-lg"
                        >
                          <p className="text-sm">{mindMap.title}</p>
                        </TooltipContent>
                      </Tooltip>
                      <div className="text-xs text-muted-foreground truncate w-36">
                        {mindMap.description}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleDeleteMindMap(mindMap.id)}
                    className="cursor-pointer shrink-0 p-3 opacity-100 group-hover:opacity-100 transition-opacity"
                    aria-label="Delete mind map"
                  >
                    <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive transition-colors" />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-3 text-sm text-muted-foreground text-center">
                No mind maps yet
              </div>
            )}
          </TooltipProvider>
        </div>
      </ScrollArea>
      <CreateMindMapModal
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export { MindMapList };
