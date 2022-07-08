import { LoggingTypeEnum } from '../enums'
import { GraphqlRequestLogInterface } from '../interfaces'

export interface OutgoingMutationResponseLogInterface {
  type: LoggingTypeEnum.outgoingMutationResponse
  request: GraphqlRequestLogInterface
  response: {
    data?: unknown
  }
}
