import { EventInterface, ConsumerLogInterface } from '../interfaces'
import { LoggingTypeEnum } from '../enums'

export interface IncomingEventResponseLogInterface {
  type: LoggingTypeEnum.incomingEventResponse
  event: {
    body: EventInterface
    headers: unknown
    failedConsumers: ConsumerLogInterface[]
    successConsumers: ConsumerLogInterface[]
  }
}
