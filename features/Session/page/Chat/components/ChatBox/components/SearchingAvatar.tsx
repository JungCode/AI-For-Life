import { Loader2, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SearchingAvatar = () => {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback className="bg-purple-500/10 backdrop-blur-md border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30 text-purple-300">
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
  );
};

export { SearchingAvatar };
