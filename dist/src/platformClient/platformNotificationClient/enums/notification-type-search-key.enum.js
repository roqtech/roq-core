"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeSearchKeyEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationTypeSearchKeyEnum;
(function (NotificationTypeSearchKeyEnum) {
    NotificationTypeSearchKeyEnum["KEY"] = "key";
})(NotificationTypeSearchKeyEnum = exports.NotificationTypeSearchKeyEnum || (exports.NotificationTypeSearchKeyEnum = {}));
(0, graphql_1.registerEnumType)(NotificationTypeSearchKeyEnum, {
    name: 'NotificationTypeSearchKeyEnum',
});
