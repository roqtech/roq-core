import { LoggingTypeEnum } from '@src/logger/enums';

export interface ErrorLogInterface {
  type: LoggingTypeEnum.error;
  stack: string;
  message: string;
}
