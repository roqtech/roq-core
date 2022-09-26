import { LoggingTypeEnum } from '../../logger/enums';
export interface ImportDataLogInterface {
    type: LoggingTypeEnum.importData;
    data?: unknown;
    message: string;
}
