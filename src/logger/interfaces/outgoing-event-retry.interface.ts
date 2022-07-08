import { EventInterface } from '../interfaces'
import { LoggingTypeEnum } from '../enums'

export interface OutgoingEventRetryInterface {
  type: LoggingTypeEnum.outgoingEventRetry
  event: {
    body: EventInterface
    headers: unknown
  }
}
