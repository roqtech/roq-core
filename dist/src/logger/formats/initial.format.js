"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialFormat = void 0;
const enums_1 = require("../../library/enums");
const winston = require("winston");
const initialFormat = (configService, cls) => winston.format((info) => {
    info.timestamp = new Date().getTime();
    info.service = configService.get('application.appName');
    info.environment = configService.get('application.appEnvironment');
    info.project = configService.get('application.appProject');
    info.requestId = cls.get(enums_1.ClsKeyEnum.REQUEST_ID);
    info.caller = cls.get(enums_1.ClsKeyEnum.REQUEST_CALLER);
    return info;
})();
exports.initialFormat = initialFormat;
