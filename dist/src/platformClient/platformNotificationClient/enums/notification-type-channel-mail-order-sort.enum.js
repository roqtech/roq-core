"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeChannelMailOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeChannelMailOrderSortEnum;
(function (NotificationTypeChannelMailOrderSortEnum) {
    NotificationTypeChannelMailOrderSortEnum["CREATED_AT"] = "createdAt";
    NotificationTypeChannelMailOrderSortEnum["UPDATED_AT"] = "updatedAt";
    NotificationTypeChannelMailOrderSortEnum["KEY"] = "key";
    NotificationTypeChannelMailOrderSortEnum["MAIL_TYPE_ID"] = "mailTypeId";
    NotificationTypeChannelMailOrderSortEnum["IS_ACTIVE"] = "isActive";
})(NotificationTypeChannelMailOrderSortEnum = exports.NotificationTypeChannelMailOrderSortEnum || (exports.NotificationTypeChannelMailOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeChannelMailOrderSortEnum, {
    name: 'NotificationTypeChannelMailOrderSortEnum',
});
