"use client";

import { useForm } from "react-hook-form";
import type React from "react";

import { InstructionChat } from "@/features/Session/page/Chat/components/InstructionChat";
import { SourcesPanel } from "@/features/Session/page/Chat/components/SourcesPanel";
import { StudioPanel } from "@/features/Session/page/Chat/components/StudioPanel";
import {
  GetConversationsDocument,
  ResearchAgentRequestDto,
  useCreateConversationMutation,
} from "@/shared/generated/schemas";
import { useParams, useRouter } from "next/navigation";
import { useChatContext } from "@/features/Session/hooks/useChatContext";

export interface IChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

export default function ChatPage() {
  const { workspaceId } = useParams();
  const router = useRouter();
  const { setInitialMessage } = useChatContext();

  const { register, handleSubmit, setValue } =
    useForm<ResearchAgentRequestDto>();

  const [createConversation, { loading: isCreatingConversation }] =
    useCreateConversationMutation({
      context: {
        headers: {
          "x-workspace-id": workspaceId,
        },
      },
      onCompleted: (data) => {
        router.replace(
          `/workspace/${workspaceId}/chat/${data.createConversation.id}`
        );
      },
      refetchQueries: [GetConversationsDocument],
    });

  const onSubmit = async (data: ResearchAgentRequestDto) => {
    setInitialMessage?.(data.message);
    const messageSnippet =
      data.message.slice(0, 50) + (data.message.length > 50 ? "..." : "");

    createConversation({
      variables: {
        input: {
          title: messageSnippet,
        },
      },
    });
  };

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Container for 3 sections */}
      <div className="flex h-full gap-4 p-4">
        {/* Left Panel - Sources */}
        <SourcesPanel />

        {/* Middle Panel - Chat */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 overflow-hidden flex flex-col"
          >
            <InstructionChat
              onSubmit={handleSubmit(onSubmit)}
              setValue={setValue}
              register={register}
              isLoading={isCreatingConversation}
            />
          </form>
        </div>

        {/* Right Panel - Studio */}
        <StudioPanel />
      </div>
    </div>
  );
}
