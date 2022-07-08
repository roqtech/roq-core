import { LoggingTypeEnum } from '../enums'
import { ConsumerLogInterface } from '../interfaces'
import { EventInterface } from './event.interface'

export interface EventSubscriberErrorLogInterface {
  type: LoggingTypeEnum.eventSubscriberError
  event: {
    shouldTrigger: boolean
    body: EventInterface
    headers: unknown
    consumer: ConsumerLogInterface
  }
  error: unknown
}
