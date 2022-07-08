import { LoggingTypeEnum } from '../enums'
import { GraphqlRequestLogInterface } from '../interfaces'

export interface OutgoingMutationErrorLogInterface {
  type: LoggingTypeEnum.outgoingMutationError
  request: GraphqlRequestLogInterface
  response: {
    data: unknown
  }
}
