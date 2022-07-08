import { LoggingTypeEnum } from '../enums'
import { GraphqlRequestLogInterface } from '../interfaces'

export interface OutgoingMutationLogInterface {
  type: LoggingTypeEnum.outgoingMutation
  request: GraphqlRequestLogInterface
}
