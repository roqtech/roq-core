"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserInviteTokenQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.checkUserInviteTokenQuery = (0, core_1.gql) `
query CheckUserInviteToken($token: String!) {
  checkUserInviteToken(token: $token) {
    email
    isExpired
    isValid
  }
}
`;
