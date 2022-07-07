import { LoggingTypeEnum } from '../enums';
import { HttpRequestLogInterface } from '../interfaces';

export interface OutgoingRequestErrorLogInterface {
  type: LoggingTypeEnum.outgoingRequestError;
  request: HttpRequestLogInterface;
  response: {
    data: unknown;
  };
}
