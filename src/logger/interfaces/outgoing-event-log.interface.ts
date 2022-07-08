import { EventInterface } from '../interfaces'
import { LoggingTypeEnum } from '../enums'

export interface OutgoingEventLogInterface {
  type: LoggingTypeEnum.outgoingEvent
  event: {
    body: EventInterface
    headers: unknown
  }
}
