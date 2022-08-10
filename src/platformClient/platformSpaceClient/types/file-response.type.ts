import { FileStatusEnum } from 'src/platformClient/platformSpaceClient/enums';
import { FileAssociationType } from 'src/platformClient/platformSpaceClient/types';

export type FileResponseType = {
  id: string;
  status: FileStatusEnum;
  createdByUserId?: string;
  name: string;
  path: string;
  size: number;
  customMetaData: Record<string, unknown>;
  contentType: string;
  createdAt?: Date;
  updatedAt?: Date;
  url?: string;
  uploadUrl?: string;
  isPublic: boolean;
  fileAssociations: {
    totalCount: number;
    data: FileAssociationType[];
  };
};
