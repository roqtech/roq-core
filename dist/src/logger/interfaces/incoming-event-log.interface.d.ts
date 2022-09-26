import { EventInterface } from '../../event/interfaces';
import { LoggingTypeEnum } from '../../logger/enums';
import { ConsumerLogInterface } from '../../logger/interfaces';
export interface IncomingEventLogInterface {
    type: LoggingTypeEnum.incomingEvent;
    event: {
        body: EventInterface;
        headers: unknown;
        consumers: ConsumerLogInterface[];
    };
}
