import { EventInterface } from 'src/event/interfaces';
import { LoggingTypeEnum } from 'src/logger/enums';

export interface OutgoingEventLogInterface {
  type: LoggingTypeEnum.outgoingEvent;
  event: {
    body: EventInterface;
    headers: unknown;
  };
}
