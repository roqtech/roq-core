import { LoggingTypeEnum } from '../enums'
import { HttpRequestLogInterface } from '../interfaces'

export interface OutgoingRequestLogInterface {
  type: LoggingTypeEnum.outgoingRequest
  request: HttpRequestLogInterface
}
