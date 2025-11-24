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
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  GetWorkspacesQuery,
  MutationMutationVariables,
} from "@/shared/generated/schemas";

interface EditWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  workspace: GetWorkspacesQuery["getWorkspaces"][0] | null;
}

export function EditWorkspaceModal({
  isOpen,
  onClose,
  workspace,
}: EditWorkspaceModalProps) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<
    MutationMutationVariables["input"]
  >({
    values: {
      name: workspace?.name || "",
      // description: workspace?.description || "",
    },
  });

  const onSubmit = async ({ name }: MutationMutationVariables["input"]) => {
    if (name === undefined) return;

    if (!name.trim()) {
      toast.error("Workspace name is required");
      return;
    }

    try {
      toast.success("Workspace updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update workspace. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border border-border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Edit Workspace
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Update your workspace name and description
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
