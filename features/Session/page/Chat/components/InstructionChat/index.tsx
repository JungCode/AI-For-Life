import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SimpleChatMutationVariables } from "@/shared/generated/schemas";
import { Loader2, Send, Sparkles } from "lucide-react";
import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

const suggestedPrompts = [
  "Explain RAG architecture in research",
  "How to evaluate paper credibility?",
  "Latest trends in machine learning",
  "Compare transformer models",
];

interface IInstructionChatProps {
  onSubmit: () => void;
  register: UseFormRegister<SimpleChatMutationVariables["input"]>;
  setValue: UseFormSetValue<SimpleChatMutationVariables["input"]>;
  isLoading: boolean;
}

const InstructionChat = ({
  onSubmit,
  register,
  isLoading,
  setValue,
}: IInstructionChatProps) => {
  return (
    <div className="flex h-full items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500/20 to-teal-500/20 ring-1 ring-purple-500/30">
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
              type="submit"
              onClick={() => setValue("message", prompt)}
              className="cursor-pointer rounded-xl border border-border/50 bg-card/50 p-4 text-left text-sm transition-all hover:border-purple-500/50 hover:bg-card"
            >
              {prompt}
            </button>
          ))}
        </div>
        <div className="relative flex items-end gap-2 rounded-2xl border border-border/50 bg-card/30 p-2 focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/50">
          <Textarea
            placeholder="Ask about research papers, topics, or concepts..."
            className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent px-3 py-3 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            disabled={isLoading}
            {...register("message", { required: true })}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit(); // triggers react-hook-form submit
              }
            }}
            {...register("message", { required: true })}
          />
          <Button
            type="submit"
            size="icon"
            className="cursor-pointer h-10 w-10 shrink-0 rounded-xl bg-linear-to-br from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Powered by RAG technology for accurate, source-backed responses
        </p>
      </div>
    </div>
  );
};

export { InstructionChat };
