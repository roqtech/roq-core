import { IdFilterArgType, StringFilterArgType } from '@src/library/argTypes';
import { OrderEnum } from '@src/library/enums';
import { FileOrderSortEnum } from '@src/platformClient/platformSpaceClient/enums';

export type GetFilesArgsType = {
  entityIdentifiers: IdFilterArgType;
  entityName: {
    equalTo?: string;
  };
  fileCategory: StringFilterArgType;
  status: StringFilterArgType;
  order?: {
    order: OrderEnum;
    sort: FileOrderSortEnum;
  };
  limit?: number;
};
