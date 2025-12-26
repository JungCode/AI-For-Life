"use client";

import { set, useForm } from "react-hook-form";
import type React from "react";

import { InstructionChat } from "@/features/Session/page/Chat/components/InstructionChat";
import {
  GetConversationsDocument,
  ResearchAgentRequestDto,
  useCreateConversationMutation,
} from "@/shared/generated/schemas";
import { useParams, useRouter } from "next/navigation";
import { useChatContext } from "@/features/Session/hooks/useChatContext";
import { AnimatedBackground } from "@/shared/components/AnimatedBackground";

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-hidden ">
      <AnimatedBackground />
      <InstructionChat
        onSubmit={handleSubmit(onSubmit)}
        setValue={setValue}
        register={register}
        isLoading={isCreatingConversation}
      />
    </form>
  );
}
