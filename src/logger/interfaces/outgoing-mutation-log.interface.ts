import { LoggingTypeEnum } from 'src/logger/enums'
import { GraphqlRequestLogInterface } from 'src/logger/interfaces'

export interface OutgoingMutationLogInterface {
  type: LoggingTypeEnum.outgoingMutation
  request: GraphqlRequestLogInterface
}
