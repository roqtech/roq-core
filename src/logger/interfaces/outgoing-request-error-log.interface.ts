import { LoggingTypeEnum } from '@src/logger/enums';
import { HttpRequestLogInterface } from '@src/logger/interfaces';

export interface OutgoingRequestErrorLogInterface {
  type: LoggingTypeEnum.outgoingRequestError;
  request: HttpRequestLogInterface;
  response: {
    data: unknown;
  };
}
