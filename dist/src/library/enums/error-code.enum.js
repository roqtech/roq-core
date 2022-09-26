"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodeEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ErrorCodeEnum;
(function (ErrorCodeEnum) {
    ErrorCodeEnum["FORBIDDEN"] = "FORBIDDEN";
    ErrorCodeEnum["GRAPHQL_VALIDATION_FAILED"] = "GRAPHQL_VALIDATION_FAILED";
    ErrorCodeEnum["INTERNAL_SERVER_ERROR"] = "INTERNAL_ERROR";
    ErrorCodeEnum["INVALID_CONTENT_TYPE_FOR_FILE_CATEGORY"] = "INVALID_CONTENT_TYPE_FOR_FILE_CATEGORY";
    ErrorCodeEnum["UNAUTHORIZED_EXCEPTION"] = "UNAUTHORIZED_EXCEPTION";
})(ErrorCodeEnum = exports.ErrorCodeEnum || (exports.ErrorCodeEnum = {}));
(0, graphql_1.registerEnumType)(ErrorCodeEnum, {
    name: 'ErrorCodeEnum',
});
