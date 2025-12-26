import { ExternalLinkIcon, FileText, Sparkles } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { MessageSource } from "@/shared/generated/schemas";
import { IMessage } from "@/features/Session/constants";

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
              message.role === MessageSource.User
                ? "bg-muted"
                : "bg-purple-500/10 backdrop-blur-md border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30 text-purple-300"
            }
          >
            {message.role === MessageSource.User ? (
              "U"
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="text-sm font-medium">
            {message.role === MessageSource.User ? "You" : "Research AI"}
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
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
