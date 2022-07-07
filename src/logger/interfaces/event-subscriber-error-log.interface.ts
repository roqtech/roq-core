import { LoggingTypeEnum } from '@src/logger/enums';
import { ConsumerLogInterface } from '@src/logger/interfaces';
import { EventInterface } from './event.interface';

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
