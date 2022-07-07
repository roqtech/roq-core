import { LoggingTypeEnum } from '@src/logger/enums';
import { GraphqlRequestLogInterface } from '@src/logger/interfaces';

export interface OutgoingQueryResponseLogInterface {
  type: LoggingTypeEnum.outgoingQueryResponse;
  request: GraphqlRequestLogInterface;
  response: {
    data?: unknown;
  };
}
