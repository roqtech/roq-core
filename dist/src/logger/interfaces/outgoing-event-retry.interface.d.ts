import { EventInterface } from '../../event/interfaces';
import { LoggingTypeEnum } from '../../logger/enums';
export interface OutgoingEventRetryInterface {
    type: LoggingTypeEnum.outgoingEventRetry;
    event: {
        body: EventInterface;
        headers: unknown;
    };
}
