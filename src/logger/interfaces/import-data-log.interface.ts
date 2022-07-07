import { LoggingTypeEnum } from '../enums';

export interface ImportDataLogInterface {
  type: LoggingTypeEnum.importData;
  data?: unknown;
  message: string;
}
