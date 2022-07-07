import { LoggingTypeEnum } from '@src/logger/enums';
import { GraphqlRequestLogInterface } from '@src/logger/interfaces';

export interface IncomingMutationLogInterface {
  type: LoggingTypeEnum.incomingMutation;
  request: GraphqlRequestLogInterface;
}
