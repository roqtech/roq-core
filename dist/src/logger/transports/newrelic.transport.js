"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewrelicTransport = void 0;
const Transport = require("winston-transport");
class NewrelicTransport extends Transport {
    constructor(opts) {
        super(opts);
    }
    log(info, callback) {
        if (info.newrelic) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
            const newrelic = require('newrelic');
            newrelic.noticeError(info.error, {
                context: info.context,
                message: info.message,
                type: info.type,
                request: info.request,
                response: info.response,
                requestId: info.requestId,
                caller: info.caller,
                service: info.service,
                environment: info.environment,
                api: info.api,
                project: info.project,
            });
        }
        callback();
    }
}
exports.NewrelicTransport = NewrelicTransport;
