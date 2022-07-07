import { LoggingTypeEnum } from '../enums';
import { GraphqlRequestLogInterface } from '../interfaces';

export interface IncomingMutationLogInterface {
  type: LoggingTypeEnum.incomingMutation;
  request: GraphqlRequestLogInterface;
}
