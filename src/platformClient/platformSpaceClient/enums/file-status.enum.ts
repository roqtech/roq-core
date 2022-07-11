import { registerEnumType } from '@nestjs/graphql';

export enum FileStatusEnum {
  cancelled = 'cancelled',
  error = 'error',
  processing = 'processing',
  ready = 'ready',
  upload_pending = 'upload_pending',
}

registerEnumType(FileStatusEnum, { name: 'FileStatusEnum' });
