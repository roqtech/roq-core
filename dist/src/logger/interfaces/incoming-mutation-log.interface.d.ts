import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface IncomingMutationLogInterface {
    type: LoggingTypeEnum.incomingMutation;
    request: GraphqlRequestLogInterface;
}
