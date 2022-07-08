import { registerEnumType } from '@nestjs/graphql'

export enum FileStatusEnum {
  UPLOAD_PENDING = 'UPLOAD_PENDING',
  READY = 'READY',
  PROCESSING = 'PROCESSING',
  ERROR = 'ERROR',
  CANCELLED = 'CANCELLED',
}

registerEnumType(FileStatusEnum, { name: 'FileStatusEnum' })
