import { EventInterface } from '../../event/interfaces';
import { LoggingTypeEnum } from '../../logger/enums';
import { ConsumerLogInterface } from '../../logger/interfaces';
export interface EventSubscriberResponseLogInterface {
    type: LoggingTypeEnum.eventSubscriberResponse;
    event: {
        shouldTrigger: boolean;
        body: EventInterface;
        headers: unknown;
        consumer: ConsumerLogInterface;
    };
}
