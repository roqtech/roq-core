import { LoggingTypeEnum } from '../../logger/enums';
import { HttpRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingRequestErrorLogInterface {
    type: LoggingTypeEnum.outgoingRequestError;
    request: HttpRequestLogInterface;
    response: {
        data: unknown;
    };
}
