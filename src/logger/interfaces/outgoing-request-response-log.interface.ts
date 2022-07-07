import { LoggingTypeEnum } from '@src/logger/enums';
import { HttpRequestLogInterface } from '@src/logger/interfaces';

export interface OutgoingRequestResponseLogInterface {
  type: LoggingTypeEnum.outgoingRequestResponse;
  request: HttpRequestLogInterface;
  response: {
    data?: unknown;
  };
}
