import { EventInterface } from '../../event/interfaces';
import { LoggingTypeEnum } from '../../logger/enums';
import { ConsumerLogInterface } from '../../logger/interfaces';
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
