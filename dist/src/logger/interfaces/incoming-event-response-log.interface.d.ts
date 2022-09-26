import { EventInterface } from '../../event/interfaces';
import { LoggingTypeEnum } from '../../logger/enums';
import { ConsumerLogInterface } from '../../logger/interfaces';
export interface IncomingEventResponseLogInterface {
    type: LoggingTypeEnum.incomingEventResponse;
    event: {
        body: EventInterface;
        headers: unknown;
        failedConsumers: ConsumerLogInterface[];
        successConsumers: ConsumerLogInterface[];
    };
}
