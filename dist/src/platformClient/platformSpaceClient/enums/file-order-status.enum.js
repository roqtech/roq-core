"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var FileOrderSortEnum;
(function (FileOrderSortEnum) {
    FileOrderSortEnum["createdAt"] = "createdAt";
    FileOrderSortEnum["updatedAt"] = "updatedAt";
    FileOrderSortEnum["name"] = "name";
    FileOrderSortEnum["status"] = "status";
    FileOrderSortEnum["content_type"] = "content_type";
})(FileOrderSortEnum = exports.FileOrderSortEnum || (exports.FileOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(FileOrderSortEnum, {
    name: 'FileOrderSortEnum',
});
