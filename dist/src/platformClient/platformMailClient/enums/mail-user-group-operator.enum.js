"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailUserGroupOperatorEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MailUserGroupOperatorEnum;
(function (MailUserGroupOperatorEnum) {
    MailUserGroupOperatorEnum["AND"] = "AND";
    MailUserGroupOperatorEnum["OR"] = "OR";
})(MailUserGroupOperatorEnum = exports.MailUserGroupOperatorEnum || (exports.MailUserGroupOperatorEnum = {}));
(0, graphql_1.registerEnumType)(MailUserGroupOperatorEnum, { name: 'MailUserGroupOperatorEnum' });
