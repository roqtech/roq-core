import { LoggingTypeEnum } from 'src/logger/enums'
import { GraphqlRequestLogInterface } from 'src/logger/interfaces'

export interface OutgoingMutationErrorLogInterface {
  type: LoggingTypeEnum.outgoingMutationError
  request: GraphqlRequestLogInterface
  response: {
    data: unknown
  }
}
