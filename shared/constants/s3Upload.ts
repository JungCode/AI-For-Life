import {
  GetPresignedUploadUrlS3Mutation,
  GetRagPresignedUploadUrlS3Mutation,
} from '../generated/schemas';

enum FolderType {
  Document = 'document',
  Policy = 'policy',
  Profile = 'profile',
  Assets = 'assets',
  OnboardingQuiz = 'onboarding-quiz',
}

enum UploadType {
  Private = 'private',
  Public = 'public',
}

enum FileExtension {
  PDF = 'application/pdf',
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  JPG = 'image/jpg',
  SVG = 'image/svg+xml',
  WEBP = 'image/webp',
  WordDoc = 'application/msword',
  WordDocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  XMLSheet = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  Excel = 'application/vnd.ms-excel',
  PowerPoint = 'application/vnd.ms-powerpoint',
  XMLPresentation = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  TXT = 'text/plain',
  TextRTF = 'text/rtf',
  ApplicationRTF = 'application/rtf',
}

const ALLOWED_IMAGE_EXTENSIONS = [
  FileExtension.JPEG,
  FileExtension.JPG,
  FileExtension.PNG,
  FileExtension.SVG,
  FileExtension.WEBP,
];

const ALLOWED_FILE_EXTENSIONS = [
  FileExtension.Excel,
  FileExtension.JPEG,
  FileExtension.JPG,
  FileExtension.PDF,
  FileExtension.PNG,
  FileExtension.PowerPoint,
  FileExtension.WordDoc,
  FileExtension.WordDocx,
  FileExtension.XMLPresentation,
  FileExtension.XMLSheet,
];

const DOCUMENT_FILE_TYPES = [FileExtension.PDF, FileExtension.WordDocx];

type S3UploadResponse =
  GetPresignedUploadUrlS3Mutation['getPresignedUploadUrlS3'] & {
    isUploadFailed?: boolean;
  };
type S3RagUploadResponse =
  GetRagPresignedUploadUrlS3Mutation['getRagPresignedUploadUrlS3'] & {
    isUploadFailed?: boolean;
  };

type StorageUploadInfo = S3UploadResponse | S3RagUploadResponse;

type FileMetadata<T = StorageUploadInfo> = {
  id?: string;
  file: File;
  uuid: string;
  uploadInfo: T | null;
  progress: number;
};

export {
  FolderType,
  UploadType,
  FileExtension,
  ALLOWED_IMAGE_EXTENSIONS,
  ALLOWED_FILE_EXTENSIONS,
  DOCUMENT_FILE_TYPES,
  type S3UploadResponse,
  type S3RagUploadResponse,
  type StorageUploadInfo,
  type FileMetadata,
};
