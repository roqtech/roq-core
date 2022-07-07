import { LoggingTypeEnum } from '../enums';
import { ConsumerLogInterface } from '../interfaces';
import { EventInterface } from './event.interface';

export interface EventSubscriberLogInterface {
  type: LoggingTypeEnum.eventSubscriber;
  event: {
    shouldTrigger: boolean;
    body: EventInterface;
    headers: unknown;
    consumer: ConsumerLogInterface;
  };
}
