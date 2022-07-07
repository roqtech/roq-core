import { LoggingTypeEnum } from '@src/logger/enums';
import { GraphqlRequestLogInterface } from '@src/logger/interfaces';

export interface IncomingQueryLogInterface {
  type: LoggingTypeEnum.incomingQuery;
  request: GraphqlRequestLogInterface;
}
