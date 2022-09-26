import { EventInterface } from '../../event/interfaces';
import { LoggingTypeEnum } from '../../logger/enums';
import { ConsumerLogInterface } from '../../logger/interfaces';
export interface EventSubscriberLogInterface {
    type: LoggingTypeEnum.eventSubscriber;
    event: {
        shouldTrigger: boolean;
        body: EventInterface;
        headers: unknown;
        consumer: ConsumerLogInterface;
    };
}
