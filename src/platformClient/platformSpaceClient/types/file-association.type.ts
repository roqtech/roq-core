import { FileResponseType } from 'src/platformClient/platformSpaceClient/types';

export type FileAssociationType = {
  createdAt: string;
  entityIdentifier: string;
  entityName: string;
  file: FileResponseType;
  fileId: string;
  id: string;
  updatedAt: string;
};
