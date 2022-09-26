"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeChannelWebLocalizedOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeChannelWebLocalizedOrderSortEnum;
(function (NotificationTypeChannelWebLocalizedOrderSortEnum) {
    NotificationTypeChannelWebLocalizedOrderSortEnum["CREATED_AT"] = "createdAt";
    NotificationTypeChannelWebLocalizedOrderSortEnum["UPDATED_AT"] = "updatedAt";
    NotificationTypeChannelWebLocalizedOrderSortEnum["KEY"] = "key";
    NotificationTypeChannelWebLocalizedOrderSortEnum["TITLE"] = "title";
    NotificationTypeChannelWebLocalizedOrderSortEnum["CONTENT"] = "content";
    NotificationTypeChannelWebLocalizedOrderSortEnum["ICON"] = "icon";
    NotificationTypeChannelWebLocalizedOrderSortEnum["LOCALE"] = "locale";
})(NotificationTypeChannelWebLocalizedOrderSortEnum = exports.NotificationTypeChannelWebLocalizedOrderSortEnum || (exports.NotificationTypeChannelWebLocalizedOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeChannelWebLocalizedOrderSortEnum, {
    name: 'NotificationTypeChannelWebLocalizedOrderSortEnum',
});
