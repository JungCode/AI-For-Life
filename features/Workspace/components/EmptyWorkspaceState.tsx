import { FolderOpen, Plus, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyWorkspaceStateProps {
  onCreateWorkspace: () => void;
}

const EmptyWorkspaceState = ({
  onCreateWorkspace,
}: EmptyWorkspaceStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 blur-3xl bg-linear-to-r from-purple-500/20 via-emerald-500/20 to-teal-500/20 rounded-full" />
        <div className="relative w-32 h-32 rounded-3xl bg-linear-to-br from-purple-500/10 via-emerald-500/10 to-teal-500/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
          <FolderOpen
            className="w-16 h-16 text-purple-400/50"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-3">
        No workspaces yet
      </h3>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Get started by creating your first workspace. Organize your research,
        collaborate with your team, and manage your AI conversations all in one
        place.
      </p>

      <Button
        onClick={onCreateWorkspace}
        size="lg"
        className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 rounded-lg font-semibold transition-all duration-300"
      >
        <Plus className="w-5 h-5 mr-2" />
        Create Your First Workspace
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl">
        <div className="text-center p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
          <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="w-6 h-6 text-purple-400" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">
            AI Conversations
          </h4>
          <p className="text-sm text-muted-foreground">
            Have intelligent conversations with AI assistants
          </p>
        </div>

        <div className="text-center p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
          <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-emerald-400" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">
            Team Collaboration
          </h4>
          <p className="text-sm text-muted-foreground">
            Work together with your team members
          </p>
        </div>

        <div className="text-center p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
          <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mx-auto mb-3">
            <FolderOpen className="w-6 h-6 text-teal-400" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">
            Organize Research
          </h4>
          <p className="text-sm text-muted-foreground">
            Keep all your research materials organized
          </p>
        </div>
      </div>
    </div>
  );
};

export { EmptyWorkspaceState };
