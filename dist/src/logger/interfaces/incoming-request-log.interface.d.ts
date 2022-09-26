import { LoggingTypeEnum } from '../../logger/enums';
import { HttpRequestLogInterface } from '../../logger/interfaces';
export interface IncomingRequestLogInterface {
    type: LoggingTypeEnum.incomingRequest;
    request: HttpRequestLogInterface;
}
