"use client";

import { useState } from "react";
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
import { UploadButton } from "./CreateMindMapModal/UploadButton";

interface ICreateMindMapModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateMindMapModal = ({
  isOpen,
  onOpenChange,
}: ICreateMindMapModalProps) => {
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

  const handleSubmit = async () => {
    const data = {
      title,
      file: selectedFile
        ? {
            name: selectedFile.name,
            size: selectedFile.size,
            type: selectedFile.type,
          }
        : null,
    };

    console.log("Mind Map Data:", data);

    if (selectedFile) {
      const fileContent = await selectedFile.text();
      console.log("File Content:", fileContent);
    }

    // Reset form
    setTitle("");
    setSelectedFile(null);
    onOpenChange(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Clear form when closing
      setTitle("");
      setSelectedFile(null);
    }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            onClick={handleSubmit}
            disabled={!title.trim() || !selectedFile}
          >
            Create Mind Map
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreateMindMapModal };
