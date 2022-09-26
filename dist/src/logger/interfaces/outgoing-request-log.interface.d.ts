import { LoggingTypeEnum } from '../../logger/enums';
import { HttpRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingRequestLogInterface {
    type: LoggingTypeEnum.outgoingRequest;
    request: HttpRequestLogInterface;
}
