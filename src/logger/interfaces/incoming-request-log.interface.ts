import { LoggingTypeEnum } from '@src/logger/enums';
import { HttpRequestLogInterface } from '@src/logger/interfaces';

export interface IncomingRequestLogInterface {
  type: LoggingTypeEnum.incomingRequest;
  request: HttpRequestLogInterface;
}
