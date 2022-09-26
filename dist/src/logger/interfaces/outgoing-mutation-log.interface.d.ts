import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingMutationLogInterface {
    type: LoggingTypeEnum.outgoingMutation;
    request: GraphqlRequestLogInterface;
}
