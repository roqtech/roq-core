"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeChannelWebLocalizedSearchKeyEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeChannelWebLocalizedSearchKeyEnum;
(function (NotificationTypeChannelWebLocalizedSearchKeyEnum) {
    NotificationTypeChannelWebLocalizedSearchKeyEnum["KEY"] = "key";
    NotificationTypeChannelWebLocalizedSearchKeyEnum["TITLE"] = "title";
    NotificationTypeChannelWebLocalizedSearchKeyEnum["ICON"] = "icon";
    NotificationTypeChannelWebLocalizedSearchKeyEnum["LOCALE"] = "locale";
})(NotificationTypeChannelWebLocalizedSearchKeyEnum = exports.NotificationTypeChannelWebLocalizedSearchKeyEnum || (exports.NotificationTypeChannelWebLocalizedSearchKeyEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeChannelWebLocalizedSearchKeyEnum, {
    name: 'NotificationTypeChannelWebLocalizedSearchKeyEnum',
});
