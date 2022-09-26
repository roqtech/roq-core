import { EventInterface } from '../../event/interfaces';
import { LoggingTypeEnum } from '../../logger/enums';
export interface OutgoingEventLogInterface {
    type: LoggingTypeEnum.outgoingEvent;
    event: {
        body: EventInterface;
        headers: unknown;
    };
}
