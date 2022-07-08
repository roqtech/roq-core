import { Format } from 'logform'
import { LoggingTypeEnum } from 'src/logger/enums'
import * as winston from 'winston'

export const messageFormat = (): Format =>
  winston.format((info) => {
    if (info.type === LoggingTypeEnum.incomingQuery) {
      info.message = `Incoming query ${info.request?.operationName} on ${info.service}${
        info.caller ? ` from ${info.caller}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.incomingMutation) {
      info.message = `Incoming mutation ${info.request?.operationName} on ${info.service}${
        info.caller ? ` from ${info.caller}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.incomingRequest) {
      info.message = `Incoming request ${info.request?.url} on ${info.service}${
        info.caller ? ` from ${info.caller}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingMutation) {
      info.message = `Outgoing mutation ${info.request?.operationName} on ${info.service}${
        info.request?.url ? ` to ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingQuery) {
      info.message = `Outgoing query ${info.request?.operationName} on ${info.service}${
        info.request?.url ? ` to ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingRequest) {
      info.message = `Outgoing request on ${info.service}${info.request?.url ? ` to ${info.request?.url}` : ''}`
    }
    if (info.type === LoggingTypeEnum.outgoingMutationResponse) {
      info.message = `Response of outgoing mutation ${info.request?.operationName} on ${info.service}${
        info.request?.url ? ` from ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingQueryResponse) {
      info.message = `Response of outgoing query ${info.request?.operationName} on ${info.service}${
        info.request?.url ? ` from ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingRequestResponse) {
      info.message = `Response of outgoing response on ${info.service}${
        info.request?.url ? ` to ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingMutationError) {
      info.message = `Error response of outgoing mutation ${info.request?.operationName} on ${info.service}${
        info.request?.url ? ` to ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingQueryError) {
      info.message = `Error response of query ${info.request?.operationName} on ${info.service}${
        info.request?.url ? ` to ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.outgoingRequestError) {
      info.message = `Error response of request on ${info.service}${
        info.request?.url ? ` to ${info.request?.url}` : ''
      }`
    }
    if (info.type === LoggingTypeEnum.error) {
      info.message = `Error: ${info.message} on ${info.service} `
    }
    if (info.type === LoggingTypeEnum.system) {
      info.message = `System: ${info.message} on ${info.service}`
    }
    if (info.type === LoggingTypeEnum.outgoingEvent) {
      info.message = `Outgoing event: ${info.event?.body?.name} on ${info.service}`
    }
    if (info.type === LoggingTypeEnum.outgoingEventRetry) {
      info.message = `Outgoing retry event: ${info.event?.body?.name} on ${info.service}`
    }
    if (info.type === LoggingTypeEnum.incomingEvent) {
      info.message = `Incoming event: ${info.event?.body?.name} on ${info.service}`
    }
    if (info.type === LoggingTypeEnum.incomingEventResponse) {
      info.message = `Response of incoming event: ${info.event?.body?.name} on ${info.service}`
    }
    if (info.type === LoggingTypeEnum.eventSubscriber) {
      info.message = `Event subscriber: ${info.event?.consumer?.consumer} on ${info.service}`
    }
    if (info.type === LoggingTypeEnum.eventSubscriberResponse) {
      info.message = `Response of event subscriber: ${info.event?.consumer?.consumer} on ${info.service}`
    }
    if (info.type === LoggingTypeEnum.eventSubscriberError) {
      info.message = `Error response of event subscriber: ${info.event?.consumer?.consumer} on ${info.service}`
    }
    return info
  })()
