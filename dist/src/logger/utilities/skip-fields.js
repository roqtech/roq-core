"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipFields = void 0;
// eslint-disable-next-line @roq/filename-suffix-mismatch
const lodash_1 = require("lodash");
const skipFields = (log, skipKeys = []) => {
    if ((0, lodash_1.isObject)(log)) {
        Object.keys(log).forEach((key) => {
            if (skipKeys.find((k) => k === key)) {
                delete log[key];
            }
            else {
                (0, exports.skipFields)(log[key], skipKeys);
            }
        });
    }
};
exports.skipFields = skipFields;
