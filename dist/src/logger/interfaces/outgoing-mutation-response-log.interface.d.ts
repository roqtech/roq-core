import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingMutationResponseLogInterface {
    type: LoggingTypeEnum.outgoingMutationResponse;
    request: GraphqlRequestLogInterface;
    response: {
        data?: unknown;
    };
}
