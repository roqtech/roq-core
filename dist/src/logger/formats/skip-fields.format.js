"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipFieldsFormat = void 0;
// eslint-disable-next-line @roq/imports-should-follow-conventions
const utilities_1 = require("../../logger/utilities");
const winston = require("winston");
const skipFieldsFormat = (configService) => {
    const skipKeys = configService.get('application.logsSkipFields');
    return winston.format((info) => {
        var _a;
        (0, utilities_1.skipFields)(info, skipKeys);
        if ((_a = info === null || info === void 0 ? void 0 : info.api) === null || _a === void 0 ? void 0 : _a.variables) {
            info.api.variables = JSON.stringify(info.api.variables);
        }
        if (info.context === 'ExceptionsHandler') {
            return null;
        }
        return info;
    })();
};
exports.skipFieldsFormat = skipFieldsFormat;
