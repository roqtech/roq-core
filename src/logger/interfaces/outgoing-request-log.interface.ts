import { LoggingTypeEnum } from 'src/logger/enums';
import { HttpRequestLogInterface } from 'src/logger/interfaces';

export interface OutgoingRequestLogInterface {
  type: LoggingTypeEnum.outgoingRequest;
  request: HttpRequestLogInterface;
}
