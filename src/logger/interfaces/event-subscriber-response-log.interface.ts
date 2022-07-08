import { EventInterface, ConsumerLogInterface } from '../interfaces'
import { LoggingTypeEnum } from '../enums'

export interface EventSubscriberResponseLogInterface {
  type: LoggingTypeEnum.eventSubscriberResponse
  event: {
    shouldTrigger: boolean
    body: EventInterface
    headers: unknown
    consumer: ConsumerLogInterface
  }
}
