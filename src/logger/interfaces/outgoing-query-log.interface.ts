import { LoggingTypeEnum } from '@src/logger/enums';
import { GraphqlRequestLogInterface } from '@src/logger/interfaces';

export interface OutgoingQueryLogInterface {
  type: LoggingTypeEnum.outgoingQuery;
  request: GraphqlRequestLogInterface;
}
