import { LoggingTypeEnum } from '../enums';
import { GraphqlRequestLogInterface } from '../interfaces';

export interface IncomingQueryLogInterface {
  type: LoggingTypeEnum.incomingQuery;
  request: GraphqlRequestLogInterface;
}
