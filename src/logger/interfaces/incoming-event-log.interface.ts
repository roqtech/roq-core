import { EventInterface } from '@src/logger/interfaces';
import { LoggingTypeEnum } from '@src/logger/enums';
import { ConsumerLogInterface } from '@src/logger/interfaces';

export interface IncomingEventLogInterface {
  type: LoggingTypeEnum.incomingEvent;
  event: {
    body: EventInterface;
    headers: unknown;
    consumers: ConsumerLogInterface[];
  };
}
