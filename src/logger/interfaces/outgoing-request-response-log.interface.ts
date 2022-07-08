import { LoggingTypeEnum } from '../enums'
import { HttpRequestLogInterface } from '../interfaces'

export interface OutgoingRequestResponseLogInterface {
  type: LoggingTypeEnum.outgoingRequestResponse
  request: HttpRequestLogInterface
  response: {
    data?: unknown
  }
}
