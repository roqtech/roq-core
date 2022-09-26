"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeUserPreferenceSearchKeyEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeUserPreferenceSearchKeyEnum;
(function (NotificationTypeUserPreferenceSearchKeyEnum) {
    NotificationTypeUserPreferenceSearchKeyEnum["KEY"] = "key";
    NotificationTypeUserPreferenceSearchKeyEnum["USER_ID"] = "userId";
})(NotificationTypeUserPreferenceSearchKeyEnum = exports.NotificationTypeUserPreferenceSearchKeyEnum || (exports.NotificationTypeUserPreferenceSearchKeyEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeUserPreferenceSearchKeyEnum, {
    name: 'NotificationTypeUserPreferenceSearchKeyEnum',
});
