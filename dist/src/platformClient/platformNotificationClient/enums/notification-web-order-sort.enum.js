"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWebOrderSortEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationWebOrderSortEnum;
(function (NotificationWebOrderSortEnum) {
    NotificationWebOrderSortEnum["createdAt"] = "createdAt";
    NotificationWebOrderSortEnum["updatedAt"] = "updatedAt";
    NotificationWebOrderSortEnum["TITLE"] = "title";
    NotificationWebOrderSortEnum["CONTENT"] = "content";
    NotificationWebOrderSortEnum["LOCALE"] = "locale";
    NotificationWebOrderSortEnum["READ"] = "read";
    NotificationWebOrderSortEnum["NOTIFICATION_TYPE_CHANNEL_WEB_ID"] = "notificationTypeChannelWebId";
    NotificationWebOrderSortEnum["USER_ID"] = "userId";
})(NotificationWebOrderSortEnum = exports.NotificationWebOrderSortEnum || (exports.NotificationWebOrderSortEnum = {}));
(0, graphql_1.registerEnumType)(NotificationWebOrderSortEnum, {
    name: 'NotificationWebOrderSortEnum',
});
