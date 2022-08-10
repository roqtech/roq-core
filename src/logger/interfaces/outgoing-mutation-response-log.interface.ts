import { LoggingTypeEnum } from 'src/logger/enums';
import { GraphqlRequestLogInterface } from 'src/logger/interfaces';

export interface OutgoingMutationResponseLogInterface {
  type: LoggingTypeEnum.outgoingMutationResponse;
  request: GraphqlRequestLogInterface;
  response: {
    data?: unknown;
  };
}
