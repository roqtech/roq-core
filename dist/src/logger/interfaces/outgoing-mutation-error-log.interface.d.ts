import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingMutationErrorLogInterface {
    type: LoggingTypeEnum.outgoingMutationError;
    request: GraphqlRequestLogInterface;
    response: {
        data: unknown;
    };
}
