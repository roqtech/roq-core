"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCloudTransport = void 0;
const logging_1 = require("@google-cloud/logging");
const Transport = require("winston-transport");
class GoogleCloudTransport extends Transport {
    constructor(opts, name) {
        super(opts);
        this.logging = new logging_1.Logging();
        this.logger = this.logging.log(name);
    }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    log(info, callback) {
        let severity = 'INFO';
        if (info.level === 'error') {
            severity = 'ERROR';
        }
        const entry = this.logger.entry({ severity }, info);
        void this.logger.write(entry);
        callback();
    }
}
exports.GoogleCloudTransport = GoogleCloudTransport;
