import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingQueryResponseLogInterface {
    type: LoggingTypeEnum.outgoingQueryResponse;
    request: GraphqlRequestLogInterface;
    response: {
        data?: unknown;
    };
}
