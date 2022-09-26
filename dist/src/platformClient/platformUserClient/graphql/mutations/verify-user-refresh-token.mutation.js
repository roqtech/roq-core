"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserRefreshTokenMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.verifyUserRefreshTokenMutation = (0, core_1.gql) `
mutation verifyUserRefreshToken($userToken: UserRefreshTokenVerifyDto!) {
  verifyUserRefreshToken(userToken: $userToken) {
    id
    userId
    validTill
  }
}
`;
