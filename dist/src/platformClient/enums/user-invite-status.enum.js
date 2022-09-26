"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInviteStatusEnum = void 0;
// eslint-disable-next-line @roq/dir-contains-index
const graphql_1 = require("@nestjs/graphql");
var UserInviteStatusEnum;
(function (UserInviteStatusEnum) {
    UserInviteStatusEnum["accepted"] = "accepted";
    UserInviteStatusEnum["canceled"] = "canceled";
    UserInviteStatusEnum["expired"] = "expired";
    UserInviteStatusEnum["pending"] = "pending";
})(UserInviteStatusEnum = exports.UserInviteStatusEnum || (exports.UserInviteStatusEnum = {}));
(0, graphql_1.registerEnumType)(UserInviteStatusEnum, {
    name: 'UserInviteStatusEnum',
});
