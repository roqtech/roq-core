"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageFormat = void 0;
const enums_1 = require("../../logger/enums");
const winston = require("winston");
const messageFormat = () => winston.format((info) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
    if (info.type === enums_1.LoggingTypeEnum.incomingQuery) {
        info.message = `Incoming query ${(_a = info.request) === null || _a === void 0 ? void 0 : _a.operationName} on ${info.service}${info.caller ? ` from ${info.caller}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.incomingMutation) {
        info.message = `Incoming mutation ${(_b = info.request) === null || _b === void 0 ? void 0 : _b.operationName} on ${info.service}${info.caller ? ` from ${info.caller}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.incomingRequest) {
        info.message = `Incoming request ${(_c = info.request) === null || _c === void 0 ? void 0 : _c.url} on ${info.service}${info.caller ? ` from ${info.caller}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingMutation) {
        info.message = `Outgoing mutation ${(_d = info.request) === null || _d === void 0 ? void 0 : _d.operationName} on ${info.service}${((_e = info.request) === null || _e === void 0 ? void 0 : _e.url) ? ` to ${(_f = info.request) === null || _f === void 0 ? void 0 : _f.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingQuery) {
        info.message = `Outgoing query ${(_g = info.request) === null || _g === void 0 ? void 0 : _g.operationName} on ${info.service}${((_h = info.request) === null || _h === void 0 ? void 0 : _h.url) ? ` to ${(_j = info.request) === null || _j === void 0 ? void 0 : _j.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingRequest) {
        info.message = `Outgoing request on ${info.service}${((_k = info.request) === null || _k === void 0 ? void 0 : _k.url) ? ` to ${(_l = info.request) === null || _l === void 0 ? void 0 : _l.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingMutationResponse) {
        info.message = `Response of outgoing mutation ${(_m = info.request) === null || _m === void 0 ? void 0 : _m.operationName} on ${info.service}${((_o = info.request) === null || _o === void 0 ? void 0 : _o.url) ? ` from ${(_p = info.request) === null || _p === void 0 ? void 0 : _p.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingQueryResponse) {
        info.message = `Response of outgoing query ${(_q = info.request) === null || _q === void 0 ? void 0 : _q.operationName} on ${info.service}${((_r = info.request) === null || _r === void 0 ? void 0 : _r.url) ? ` from ${(_s = info.request) === null || _s === void 0 ? void 0 : _s.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingRequestResponse) {
        info.message = `Response of outgoing response on ${info.service}${((_t = info.request) === null || _t === void 0 ? void 0 : _t.url) ? ` to ${(_u = info.request) === null || _u === void 0 ? void 0 : _u.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingMutationError) {
        info.message = `Error response of outgoing mutation ${(_v = info.request) === null || _v === void 0 ? void 0 : _v.operationName} on ${info.service}${((_w = info.request) === null || _w === void 0 ? void 0 : _w.url) ? ` to ${(_x = info.request) === null || _x === void 0 ? void 0 : _x.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingQueryError) {
        info.message = `Error response of query ${(_y = info.request) === null || _y === void 0 ? void 0 : _y.operationName} on ${info.service}${((_z = info.request) === null || _z === void 0 ? void 0 : _z.url) ? ` to ${(_0 = info.request) === null || _0 === void 0 ? void 0 : _0.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingRequestError) {
        info.message = `Error response of request on ${info.service}${((_1 = info.request) === null || _1 === void 0 ? void 0 : _1.url) ? ` to ${(_2 = info.request) === null || _2 === void 0 ? void 0 : _2.url}` : ''}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.error) {
        info.message = `Error: ${info.message} on ${info.service} `;
    }
    if (info.type === enums_1.LoggingTypeEnum.system) {
        info.message = `System: ${info.message} on ${info.service}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingEvent) {
        info.message = `Outgoing event: ${(_4 = (_3 = info.event) === null || _3 === void 0 ? void 0 : _3.body) === null || _4 === void 0 ? void 0 : _4.name} on ${info.service}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.outgoingEventRetry) {
        info.message = `Outgoing retry event: ${(_6 = (_5 = info.event) === null || _5 === void 0 ? void 0 : _5.body) === null || _6 === void 0 ? void 0 : _6.name} on ${info.service}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.incomingEvent) {
        info.message = `Incoming event: ${(_8 = (_7 = info.event) === null || _7 === void 0 ? void 0 : _7.body) === null || _8 === void 0 ? void 0 : _8.name} on ${info.service}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.incomingEventResponse) {
        info.message = `Response of incoming event: ${(_10 = (_9 = info.event) === null || _9 === void 0 ? void 0 : _9.body) === null || _10 === void 0 ? void 0 : _10.name} on ${info.service}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.eventSubscriber) {
        info.message = `Event subscriber: ${(_12 = (_11 = info.event) === null || _11 === void 0 ? void 0 : _11.consumer) === null || _12 === void 0 ? void 0 : _12.consumer} on ${info.service}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.eventSubscriberResponse) {
        info.message = `Response of event subscriber: ${(_14 = (_13 = info.event) === null || _13 === void 0 ? void 0 : _13.consumer) === null || _14 === void 0 ? void 0 : _14.consumer} on ${info.service}`;
    }
    if (info.type === enums_1.LoggingTypeEnum.eventSubscriberError) {
        info.message = `Error response of event subscriber: ${(_16 = (_15 = info.event) === null || _15 === void 0 ? void 0 : _15.consumer) === null || _16 === void 0 ? void 0 : _16.consumer} on ${info.service}`;
    }
    return info;
})();
exports.messageFormat = messageFormat;
