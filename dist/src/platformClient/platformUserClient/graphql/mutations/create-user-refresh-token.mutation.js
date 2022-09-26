"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRefreshTokenMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.createUserRefreshTokenMutation = (0, core_1.gql) `
mutation createUserRefreshToken($userToken: UserRefreshTokenCreateDto!) {
  createUserRefreshToken(userToken: $userToken) {
    id
    token
  }
}
`;
