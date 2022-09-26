"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesQuery = exports.fileQuery = exports.updateFileStatusMutation = exports.createFileUploadUrlMutation = void 0;
var mutations_1 = require("../../../platformClient/platformSpaceClient/graphql/mutations");
Object.defineProperty(exports, "createFileUploadUrlMutation", { enumerable: true, get: function () { return mutations_1.createFileUploadUrlMutation; } });
Object.defineProperty(exports, "updateFileStatusMutation", { enumerable: true, get: function () { return mutations_1.updateFileStatusMutation; } });
var queries_1 = require("../../../platformClient/platformSpaceClient/graphql/queries");
Object.defineProperty(exports, "fileQuery", { enumerable: true, get: function () { return queries_1.fileQuery; } });
Object.defineProperty(exports, "filesQuery", { enumerable: true, get: function () { return queries_1.filesQuery; } });
