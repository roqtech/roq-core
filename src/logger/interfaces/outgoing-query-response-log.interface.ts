import { LoggingTypeEnum } from '../enums';
import { GraphqlRequestLogInterface } from '../interfaces';

export interface OutgoingQueryResponseLogInterface {
  type: LoggingTypeEnum.outgoingQueryResponse;
  request: GraphqlRequestLogInterface;
  response: {
    data?: unknown;
  };
}
