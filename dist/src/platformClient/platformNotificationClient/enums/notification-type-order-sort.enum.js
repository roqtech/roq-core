"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeOrderSortEnum;
(function (NotificationTypeOrderSortEnum) {
    NotificationTypeOrderSortEnum["CREATED_AT"] = "createdAt";
    NotificationTypeOrderSortEnum["UPDATED_AT"] = "updatedAt";
    NotificationTypeOrderSortEnum["KEY"] = "key";
    NotificationTypeOrderSortEnum["DESCRIPTION"] = "description";
    NotificationTypeOrderSortEnum["DEFAULT_USER_ACTIVE_WEB"] = "defaultUserActiveWeb";
    NotificationTypeOrderSortEnum["DEFAULT_USER_ACTIVE_MAIL"] = "defaultUserActiveMail";
    NotificationTypeOrderSortEnum["IS_ACTIVE"] = "isActive";
})(NotificationTypeOrderSortEnum = exports.NotificationTypeOrderSortEnum || (exports.NotificationTypeOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeOrderSortEnum, {
    name: 'NotificationTypeOrderSortEnum',
});
