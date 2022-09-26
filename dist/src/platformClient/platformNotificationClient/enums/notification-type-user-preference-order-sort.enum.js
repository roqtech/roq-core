"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeUserPreferenceOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeUserPreferenceOrderSortEnum;
(function (NotificationTypeUserPreferenceOrderSortEnum) {
    NotificationTypeUserPreferenceOrderSortEnum["CREATED_AT"] = "createdAt";
    NotificationTypeUserPreferenceOrderSortEnum["UPDATED_AT"] = "updatedAt";
    NotificationTypeUserPreferenceOrderSortEnum["KEY"] = "key";
    NotificationTypeUserPreferenceOrderSortEnum["USER_ID"] = "userId";
    NotificationTypeUserPreferenceOrderSortEnum["WEB"] = "web";
    NotificationTypeUserPreferenceOrderSortEnum["MAIL"] = "mail";
})(NotificationTypeUserPreferenceOrderSortEnum = exports.NotificationTypeUserPreferenceOrderSortEnum || (exports.NotificationTypeUserPreferenceOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeUserPreferenceOrderSortEnum, {
    name: 'NotificationTypeUserPreferenceOrderSortEnum',
});
