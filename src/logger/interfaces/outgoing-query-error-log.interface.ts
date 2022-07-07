import { LoggingTypeEnum } from 'src/logger/enums';
import { GraphqlRequestLogInterface } from 'src/logger/interfaces';

export interface OutgoingQueryErrorLogInterface {
  type: LoggingTypeEnum.outgoingQueryError;
  request: GraphqlRequestLogInterface;
  response: {
    data: unknown;
  };
}
