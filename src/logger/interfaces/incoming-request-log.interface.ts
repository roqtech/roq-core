import { LoggingTypeEnum } from '../enums';
import { HttpRequestLogInterface } from '../interfaces';

export interface IncomingRequestLogInterface {
  type: LoggingTypeEnum.incomingRequest;
  request: HttpRequestLogInterface;
}
