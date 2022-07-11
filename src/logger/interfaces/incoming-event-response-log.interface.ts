import { EventInterface } from 'src/event/interfaces';
import { LoggingTypeEnum } from 'src/logger/enums';
import { ConsumerLogInterface } from 'src/logger/interfaces';

export interface IncomingEventResponseLogInterface {
  type: LoggingTypeEnum.incomingEventResponse;
  event: {
    body: EventInterface;
    headers: unknown;
    failedConsumers: ConsumerLogInterface[];
    successConsumers: ConsumerLogInterface[];
  };
}
