import { LoggingTypeEnum } from '../../logger/enums';
import { HttpRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingRequestResponseLogInterface {
    type: LoggingTypeEnum.outgoingRequestResponse;
    request: HttpRequestLogInterface;
    response: {
        data?: unknown;
    };
}
