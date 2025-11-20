"use client";

import type React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Workspace } from "@/app/(private)/workspace/page";
import { useForm } from "react-hook-form";

interface CreateWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type WorkspaceUpdateInput = Omit<
  Workspace,
  "id" | "color" | "members" | "sessions"
>;

export function CreateWorkspaceModal({
  isOpen,
  onClose,
}: CreateWorkspaceModalProps) {
  const { register, handleSubmit } = useForm<WorkspaceUpdateInput>({});

  const onSubmit = ({ name, description }: WorkspaceUpdateInput) => {
    if (name === undefined || description === undefined) return;

    if (name.trim()) {
      console.log("Created workspace:", { name, description });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-slate-800/95 backdrop-blur-xl border border-white/10 text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Create Workspace
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Create your workspace name and description
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-300"
              >
                Workspace Name
              </Label>
              <Input
                {...register("name")}
                placeholder="Enter workspace name"
                className="bg-black/30 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-300"
              >
                Description
              </Label>
              <Textarea
                {...register("description")}
                placeholder="Enter workspace description"
                rows={4}
                className="bg-black/30 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 resize-none"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
