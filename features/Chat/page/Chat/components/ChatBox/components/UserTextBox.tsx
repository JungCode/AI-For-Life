import { IMessage } from "@/app/chat/[id]/page";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

interface IUserTextBoxProps {
  message: IMessage;
}

const UserTextBox = ({ message }: IUserTextBoxProps) => {
  return (
    <div key={message.id} className="space-y-4">
      <div className="flex items-start justify-end gap-4">
        <div className="flex flex-col items-end flex-1 space-y-2">
          <div className="text-sm font-medium">You</div>
          <div className="prose prose-invert max-w-none text-sm leading-relaxed">
            <p className="mb-2 last:mb-0 bg-muted py-2 px-4 rounded-xl">
              {message.content}
            </p>
          </div>
        </div>
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarFallback
            className={
              message.role === "user"
                ? "bg-muted"
                : "bg-gradient-to-br from-purple-500 to-teal-500"
            }
          />
        </Avatar>
      </div>
    </div>
  );
};

export { UserTextBox };
