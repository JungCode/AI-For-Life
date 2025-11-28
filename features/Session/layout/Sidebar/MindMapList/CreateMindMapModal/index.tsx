"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SUPPORTED_FILE_TYPES,
  SUPPORTED_FILE_EXTENSIONS,
  SUPPORTED_FILE_FORMATS_DISPLAY,
} from "@/shared/constants/fileFormats";
import { UploadButton } from "./UploadButton";
import {
  CreateMindmapMutationVariables,
  useCreateMindmapMutation,
} from "@/shared/generated/schemas";

interface ICreateMindMapModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateMindMapModal = ({
  isOpen,
  onOpenChange,
}: ICreateMindMapModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { register, handleSubmit, watch, reset } =
    useForm<CreateMindmapMutationVariables["input"]>();

  const [createMindmap] = useCreateMindmapMutation({
    onCompleted: () => {
      toast.success("Mind map created successfully!");
      setSelectedFile(null);
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create mind map");
    },
  });

  const titleWatch = watch("title");

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileExtension = file.name
      .toLowerCase()
      .substring(file.name.lastIndexOf("."));

    if (
      SUPPORTED_FILE_TYPES.includes(file.type) ||
      SUPPORTED_FILE_EXTENSIONS.includes(fileExtension)
    ) {
      setSelectedFile(file);
    } else {
      alert(
        `Please select a valid text format file (${SUPPORTED_FILE_FORMATS_DISPLAY})`
      );
    }
  };

  const onSubmit = async (data: CreateMindmapMutationVariables["input"]) => {
    if (!selectedFile) return;

    const fileContent = await selectedFile.text();

    await createMindmap({
      variables: {
        input: {
          content: fileContent,
          title: data.title,
        },
      },
    });
  };

  const handleOpenChange = (open: boolean) => {
    reset();
    setSelectedFile(null);
    onOpenChange(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Mind Map</DialogTitle>
          <DialogDescription>
            Enter a title and import a text format file to create your mind map.
            Supported formats: {SUPPORTED_FILE_FORMATS_DISPLAY}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter mind map title"
              {...register("title", { required: true })}
            />
          </div>
          <UploadButton
            selectedFile={selectedFile}
            onFileSelect={handleFileSelect}
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={!titleWatch?.trim() || !selectedFile}
          >
            Create Mind Map
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreateMindMapModal };
