import { registerEnumType } from '@nestjs/graphql';

export enum FileOrderSortEnum {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  NAME = 'NAME',
  STATUS = 'STATUS',
  CONTENT_TYPE = 'CONTENT_TYPE',
}

registerEnumType(FileOrderSortEnum, {
  name: 'FileOrderSortEnum',
});
