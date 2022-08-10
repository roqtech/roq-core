import { LoggingTypeEnum } from 'src/logger/enums';

export interface ImportDataLogInterface {
  type: LoggingTypeEnum.importData;
  data?: unknown;
  message: string;
}
