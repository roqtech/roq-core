"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStatusEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var FileStatusEnum;
(function (FileStatusEnum) {
    FileStatusEnum["cancelled"] = "cancelled";
    FileStatusEnum["error"] = "error";
    FileStatusEnum["processing"] = "processing";
    FileStatusEnum["ready"] = "ready";
    FileStatusEnum["upload_pending"] = "upload_pending";
})(FileStatusEnum = exports.FileStatusEnum || (exports.FileStatusEnum = {}));
(0, graphql_1.registerEnumType)(FileStatusEnum, { name: 'FileStatusEnum' });
