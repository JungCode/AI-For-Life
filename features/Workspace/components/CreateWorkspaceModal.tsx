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
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import {
  GetWorkspacesDocument,
  MutationMutationVariables,
  useMutationMutation,
} from "@/shared/generated/schemas";

interface CreateWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type WorkspaceUpdateInput = MutationMutationVariables["input"];

export function CreateWorkspaceModal({
  isOpen,
  onClose,
}: CreateWorkspaceModalProps) {
  const { register, handleSubmit } = useForm<WorkspaceUpdateInput>({});
  const [createWorkspace, { loading }] = useMutationMutation({
    refetchQueries: [GetWorkspacesDocument],
    onCompleted: () => {
      toast.success("Workspace created successfully!", {
        position: "top-center",
      });
    },
    onError: () => {
      toast.error("Failed to create workspace. Please try again.");
    },
  });

  const onSubmit = async ({ name }: WorkspaceUpdateInput) => {
    if (name === undefined) return;

    if (!name.trim()) {
      toast.error("Workspace name is required");
      return;
    }

    await createWorkspace({
      variables: {
        input: {
          name,
        },
      },
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border border-border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Create Workspace
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Create your workspace name and description
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Workspace Name
              </Label>
              <Input
                {...register("name")}
                placeholder="Enter workspace name"
                className="bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-foreground"
              >
                Description
              </Label>
              <Textarea
                // {...register("description")}
                placeholder="Enter workspace description"
                rows={4}
                className="bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20 resize-none"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="bg-muted/50 border-border hover:bg-muted"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-purple-500/10 backdrop-blur-md border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30 text-purple-300 font-semibold shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
