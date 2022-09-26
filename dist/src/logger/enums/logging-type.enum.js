"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingTypeEnum = void 0;
/*eslint-disable @roq/only-constants-in-enum*/
/*eslint-disable @typescript-eslint/naming-convention*/
var LoggingTypeEnum;
(function (LoggingTypeEnum) {
    LoggingTypeEnum["error"] = "error";
    LoggingTypeEnum["system"] = "system";
    LoggingTypeEnum["importData"] = "import-data";
    LoggingTypeEnum["incomingMutation"] = "incoming-mutation";
    LoggingTypeEnum["incomingQuery"] = "incoming-query";
    LoggingTypeEnum["incomingRequest"] = "incoming-request";
    LoggingTypeEnum["outgoingMutation"] = "outgoing-mutation";
    LoggingTypeEnum["outgoingQuery"] = "outgoing-query";
    LoggingTypeEnum["outgoingRequest"] = "outgoing-request";
    LoggingTypeEnum["outgoingMutationResponse"] = "outgoing-mutation-response";
    LoggingTypeEnum["outgoingQueryResponse"] = "outgoing-query-response";
    LoggingTypeEnum["outgoingRequestResponse"] = "outgoing-request-response";
    LoggingTypeEnum["outgoingMutationError"] = "outgoing-mutation-error";
    LoggingTypeEnum["outgoingQueryError"] = "outgoing-query-error";
    LoggingTypeEnum["outgoingRequestError"] = "outgoing-request-error";
    LoggingTypeEnum["outgoingEvent"] = "outgoing-event";
    LoggingTypeEnum["outgoingEventRetry"] = "outgoing-event-retry";
    LoggingTypeEnum["incomingEvent"] = "incoming-event";
    LoggingTypeEnum["incomingEventResponse"] = "incoming-event-response";
    LoggingTypeEnum["eventSubscriber"] = "event-subscriber";
    LoggingTypeEnum["eventSubscriberError"] = "event-subscriber-error";
    LoggingTypeEnum["eventSubscriberResponse"] = "event-subscriber-response";
})(LoggingTypeEnum = exports.LoggingTypeEnum || (exports.LoggingTypeEnum = {}));
