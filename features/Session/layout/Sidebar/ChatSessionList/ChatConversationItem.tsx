import {
  MessageSquare,
  Trash2,
  Pencil,
  Loader2,
  MoreVertical,
} from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ChatConversationItemProps {
  session: {
    id: string;
    title: string;
    context?: string | null;
  };
  isActive: boolean;
  onSessionChange: () => void;
  onDelete: () => void;
  onUpdate: (title: string) => void;
  isDeleting?: boolean;
  isUpdating?: boolean;
}

export const ChatConversationItem = ({
  session,
  isActive,
  onSessionChange,
  onDelete,
  onUpdate,
  isDeleting = false,
  isUpdating = false,
}: ChatConversationItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(session.title);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditTitle(session.title);
    setIsPopoverOpen(false);
  };

  const handleDeleteClick = () => {
    onDelete();
    setIsPopoverOpen(false);
  };

  const handleSaveEdit = () => {
    if (editTitle.trim() && editTitle !== session.title) {
      onUpdate(editTitle.trim());
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle(session.title);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  const isLoading = isDeleting || isUpdating;

  return (
    <div
      className={`group relative flex items-center rounded-lg transition-all hover:bg-accent ${
        isActive ? "bg-accent" : ""
      }`}
    >
      <button
        onClick={onSessionChange}
        className="cursor-pointer flex items-start gap-2 flex-1 min-w-0 p-2 text-left"
        disabled={isEditing}
      >
        <MessageSquare className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSaveEdit}
              autoFocus
              className="w-full px-2 py-1 text-sm bg-background border border-border rounded"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="font-medium truncate text-foreground text-sm">
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
          )}
          <div className="text-xs text-muted-foreground truncate">
            {session.context}
          </div>
        </div>
      </button>

      <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {isLoading ? (
          <div className="p-2">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <button
                className="p-2 hover:bg-accent/50 rounded"
                aria-label="More options"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-1" align="start" side="right">
              <div className="flex flex-col">
                <button
                  onClick={handleEditClick}
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded hover:bg-accent transition-colors text-left"
                >
                  <Pencil className="h-4 w-4" />
                  <span>Rename</span>
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded hover:bg-accent text-destructive transition-colors text-left"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};
