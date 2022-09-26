"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUserGroupOperatorEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NotificationUserGroupOperatorEnum;
(function (NotificationUserGroupOperatorEnum) {
    NotificationUserGroupOperatorEnum["AND"] = "AND";
    NotificationUserGroupOperatorEnum["OR"] = "OR";
})(NotificationUserGroupOperatorEnum = exports.NotificationUserGroupOperatorEnum || (exports.NotificationUserGroupOperatorEnum = {}));
(0, graphql_1.registerEnumType)(NotificationUserGroupOperatorEnum, { name: 'NotificationUserGroupOperatorEnum' });
