"use client";

import { useRef } from "react";
import { Plus, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SUPPORTED_FILE_ACCEPT } from "@/shared/constants/fileFormats";

interface IUploadButtonProps {
  selectedFile: File | null;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadButton = ({ selectedFile, onFileSelect }: IUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="grid gap-2">
      <Label htmlFor="file">Import Text File *</Label>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            id="file"
            type="file"
            accept={SUPPORTED_FILE_ACCEPT}
            ref={fileInputRef}
            onChange={onFileSelect}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Choose File
          </Button>
        </div>
        {selectedFile && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-3 py-2 rounded-md">
            <FileText className="h-3 w-3" />
            <span className="truncate">{selectedFile.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export { UploadButton };
