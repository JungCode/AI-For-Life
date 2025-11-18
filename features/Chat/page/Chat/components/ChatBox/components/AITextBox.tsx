import { IMessage } from "@/app/chat/[id]/page";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon, FileText, Sparkles } from "lucide-react";
import React from "react";

interface IAITextBoxProps {
  message: IMessage;
}

const AITextBox = ({ message }: IAITextBoxProps) => {
  return (
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
            {message.role === "user" ? "U" : <Sparkles className="h-4 w-4" />}
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
                    <Badge variant="outline" className="shrink-0 text-xs">
                      {i + 1}
                    </Badge>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {source.title}
                        <ExternalLinkIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
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
  );
};

export { AITextBox };
