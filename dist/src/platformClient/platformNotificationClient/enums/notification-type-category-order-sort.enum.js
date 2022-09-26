"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeCategoryOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeCategoryOrderSortEnum;
(function (NotificationTypeCategoryOrderSortEnum) {
    NotificationTypeCategoryOrderSortEnum["CREATED_AT"] = "createdAt";
    NotificationTypeCategoryOrderSortEnum["UPDATED_AT"] = "updatedAt";
    NotificationTypeCategoryOrderSortEnum["KEY"] = "key";
    NotificationTypeCategoryOrderSortEnum["DESCRIPTION"] = "description";
})(NotificationTypeCategoryOrderSortEnum = exports.NotificationTypeCategoryOrderSortEnum || (exports.NotificationTypeCategoryOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeCategoryOrderSortEnum, {
    name: 'NotificationTypeCategoryOrderSortEnum',
});
