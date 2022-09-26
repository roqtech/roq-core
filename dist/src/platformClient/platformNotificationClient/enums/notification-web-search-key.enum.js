"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWebSearchKeyEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationWebSearchKeyEnum;
(function (NotificationWebSearchKeyEnum) {
    NotificationWebSearchKeyEnum["TITLE"] = "title";
    NotificationWebSearchKeyEnum["LOCALE"] = "locale";
    NotificationWebSearchKeyEnum["NOTIFICATION_TYPE_CHANNEL_WEB_ID"] = "notificationTypeChannelWebId";
    NotificationWebSearchKeyEnum["USER_ID"] = "userId";
})(NotificationWebSearchKeyEnum = exports.NotificationWebSearchKeyEnum || (exports.NotificationWebSearchKeyEnum = {}));
(0, graphql_1.registerEnumType)(NotificationWebSearchKeyEnum, {
    name: 'NotificationWebSearchKeyEnum',
});
