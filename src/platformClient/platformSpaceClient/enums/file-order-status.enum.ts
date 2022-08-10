import { registerEnumType } from '@nestjs/graphql';

export enum FileOrderSortEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
  status = 'status',
  content_type = 'content_type',
}

registerEnumType(FileOrderSortEnum, {
  name: 'FileOrderSortEnum',
});
