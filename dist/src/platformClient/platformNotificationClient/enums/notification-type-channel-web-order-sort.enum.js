"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeChannelWebOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeChannelWebOrderSortEnum;
(function (NotificationTypeChannelWebOrderSortEnum) {
    NotificationTypeChannelWebOrderSortEnum["CREATED_AT"] = "createdAt";
    NotificationTypeChannelWebOrderSortEnum["UPDATED_AT"] = "updatedAt";
    NotificationTypeChannelWebOrderSortEnum["KEY"] = "key";
    NotificationTypeChannelWebOrderSortEnum["IS_ACTIVE"] = "isActive";
})(NotificationTypeChannelWebOrderSortEnum = exports.NotificationTypeChannelWebOrderSortEnum || (exports.NotificationTypeChannelWebOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeChannelWebOrderSortEnum, {
    name: 'NotificationTypeChannelWebOrderSortEnum',
});
