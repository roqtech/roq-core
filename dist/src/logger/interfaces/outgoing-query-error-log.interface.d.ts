import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingQueryErrorLogInterface {
    type: LoggingTypeEnum.outgoingQueryError;
    request: GraphqlRequestLogInterface;
    response: {
        data: unknown;
    };
}
