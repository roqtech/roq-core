import { LoggingTypeEnum } from '../enums';

export interface DebugLogInterface {
  type: LoggingTypeEnum.system;
  data?: unknown;
  message: string;
}
