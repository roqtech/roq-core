import { EventInterface, ConsumerLogInterface } from '../interfaces'
import { LoggingTypeEnum } from '../enums'

export interface IncomingEventLogInterface {
  type: LoggingTypeEnum.incomingEvent
  event: {
    body: EventInterface
    headers: unknown
    consumers: ConsumerLogInterface[]
  }
}
