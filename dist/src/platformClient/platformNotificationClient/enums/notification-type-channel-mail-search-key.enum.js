"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeChannelMailSearchKeyEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeChannelMailSearchKeyEnum;
(function (NotificationTypeChannelMailSearchKeyEnum) {
    NotificationTypeChannelMailSearchKeyEnum["KEY"] = "key";
    NotificationTypeChannelMailSearchKeyEnum["MAIL_TYPE_ID"] = "mailTypeId";
})(NotificationTypeChannelMailSearchKeyEnum = exports.NotificationTypeChannelMailSearchKeyEnum || (exports.NotificationTypeChannelMailSearchKeyEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeChannelMailSearchKeyEnum, {
    name: 'NotificationTypeChannelMailSearchKeyEnum',
});
