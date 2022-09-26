import { IdFilterArgType, StringFilterArgType } from '../../../library/argTypes';
import { OrderEnum } from '../../../library/enums';
import { FileOrderSortEnum } from '../../../platformClient/platformSpaceClient/enums';
export declare type GetFilesArgsType = {
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
