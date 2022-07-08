// eslint-disable-next-line @roq/filename-suffix-mismatch
import { Logger as BaseLogger } from '@nestjs/common'
import {
  DebugLogInterface,
  ErrorLogInterface,
  EventSubscriberErrorLogInterface,
  EventSubscriberLogInterface,
  EventSubscriberResponseLogInterface,
  ImportDataLogInterface,
  IncomingEventLogInterface,
  IncomingEventResponseLogInterface,
  IncomingMutationLogInterface,
  IncomingQueryLogInterface,
  IncomingRequestLogInterface,
  OutgoingEventLogInterface,
  OutgoingEventRetryInterface,
  OutgoingMutationErrorLogInterface,
  OutgoingMutationLogInterface,
  OutgoingMutationResponseLogInterface,
  OutgoingQueryErrorLogInterface,
  OutgoingQueryLogInterface,
  OutgoingQueryResponseLogInterface,
  OutgoingRequestErrorLogInterface,
  OutgoingRequestLogInterface,
  OutgoingRequestResponseLogInterface,
} from '../interfaces'

export class Logger extends BaseLogger {
  log(
    message:
      | IncomingMutationLogInterface
      | IncomingQueryLogInterface
      | IncomingRequestLogInterface
      | OutgoingMutationLogInterface
      | OutgoingQueryLogInterface
      | OutgoingRequestLogInterface
      | OutgoingMutationResponseLogInterface
      | OutgoingQueryResponseLogInterface
      | OutgoingRequestResponseLogInterface
      | DebugLogInterface
      | ImportDataLogInterface
      | OutgoingEventLogInterface
      | OutgoingEventRetryInterface
      | IncomingEventLogInterface
      | IncomingEventResponseLogInterface
      | EventSubscriberLogInterface
      | EventSubscriberResponseLogInterface
      | string,
    context?: string,
  ): void {
    super.log(message, context)
  }
  error(
    message:
      | OutgoingMutationErrorLogInterface
      | OutgoingQueryErrorLogInterface
      | OutgoingRequestErrorLogInterface
      | ErrorLogInterface
      | EventSubscriberErrorLogInterface,
    stack?: string,
    context?: string,
  ): void {
    super.error(message, stack, context)
  }
}
