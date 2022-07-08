import { LoggingTypeEnum } from '../enums'
import { GraphqlRequestLogInterface } from '../interfaces'

export interface OutgoingQueryErrorLogInterface {
  type: LoggingTypeEnum.outgoingQueryError
  request: GraphqlRequestLogInterface
  response: {
    data: unknown
  }
}
