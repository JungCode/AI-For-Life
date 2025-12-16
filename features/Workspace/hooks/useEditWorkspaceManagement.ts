import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  GetWorkspacesDocument,
  GetWorkspacesQuery,
  UpdateWorkspaceMutationVariables,
  useDeleteWorkspaceMutation,
  useUpdateWorkspaceMutation,
} from "@/shared/generated/schemas";

interface UseEditWorkspaceManagementProps {
  workspace: GetWorkspacesQuery["getWorkspaces"][0] | null;
  onClose: () => void;
}

export function useEditWorkspaceManagement({
  workspace,
  onClose,
}: UseEditWorkspaceManagementProps) {
  const { register, handleSubmit } = useForm<
    UpdateWorkspaceMutationVariables["input"]
  >({
    values: {
      name: workspace?.name || "",
      avatarKey: undefined,
    },
  });

  const [updateWorkspace, { loading: isUpdating }] = useUpdateWorkspaceMutation(
    {
      refetchQueries: [GetWorkspacesDocument],
      context: {
        headers: {
          ["x-workspace-id"]: workspace?.id || "",
        },
      },
      onCompleted: () => {
        toast.success("Update Workspace successfully!", {
          position: "top-center",
        });
        onClose();
      },
      onError: (e) => {
        toast.error(e.message);
      },
    }
  );

  const [deleteWorkspace, { loading: isDeleting }] = useDeleteWorkspaceMutation(
    {
      refetchQueries: [GetWorkspacesDocument],
      context: {
        headers: {
          ["x-workspace-id"]: workspace?.id || "",
        },
      },
      onCompleted: () => {
        toast.success("Delete Workspace successfully!", {
          position: "top-center",
        });
        onClose();
      },
      onError: (e) => {
        toast.error(e.message);
      },
    }
  );

  const onSubmit = async ({
    name,
  }: UpdateWorkspaceMutationVariables["input"]) => {
    if (name === undefined) return;

    if (!name.trim()) {
      toast.error("Workspace name is required");
      return;
    }

    updateWorkspace({
      variables: {
        input: {
          name,
          avatarKey: undefined,
        },
      },
    });
  };

  const handleDelete = async () => {
    deleteWorkspace();
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    handleDelete,
    isUpdating,
    isDeleting,
  };
}
