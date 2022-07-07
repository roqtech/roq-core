import { EventInterface } from '@src/logger/interfaces';
import { LoggingTypeEnum } from '@src/logger/enums';

export interface OutgoingEventRetryInterface {
  type: LoggingTypeEnum.outgoingEventRetry;
  event: {
    body: EventInterface;
    headers: unknown;
  };
}
