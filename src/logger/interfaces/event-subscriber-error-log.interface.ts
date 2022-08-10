import { EventInterface } from 'src/event/interfaces';
import { LoggingTypeEnum } from 'src/logger/enums';
import { ConsumerLogInterface } from 'src/logger/interfaces';

export interface EventSubscriberErrorLogInterface {
  type: LoggingTypeEnum.eventSubscriberError;
  event: {
    shouldTrigger: boolean;
    body: EventInterface;
    headers: unknown;
    consumer: ConsumerLogInterface;
  };
  error: unknown;
}
