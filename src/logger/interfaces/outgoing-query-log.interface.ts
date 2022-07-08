import { LoggingTypeEnum } from '../enums'
import { GraphqlRequestLogInterface } from '../interfaces'

export interface OutgoingQueryLogInterface {
  type: LoggingTypeEnum.outgoingQuery
  request: GraphqlRequestLogInterface
}
