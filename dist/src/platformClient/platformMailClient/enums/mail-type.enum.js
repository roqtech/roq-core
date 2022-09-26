"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailTypeEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MailTypeEnum;
(function (MailTypeEnum) {
    MailTypeEnum["CONFIRM_MAIL"] = "CONFIRM_MAIL";
    MailTypeEnum["RESET_PASSWORD_MAIL"] = "RESET_PASSWORD_MAIL";
    MailTypeEnum["WELCOME_USER_MAIL"] = "WELCOME_USER_MAIL";
})(MailTypeEnum = exports.MailTypeEnum || (exports.MailTypeEnum = {}));
(0, graphql_1.registerEnumType)(MailTypeEnum, {
    name: 'MailTypeEnum',
});
