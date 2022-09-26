"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateRefreshTokenMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.rotateRefreshTokenMutation = (0, core_1.gql) `
mutation rotateRefreshToken($token: String!) {
  rotateRefreshToken(userToken: { token: $token }) {
    id
    token
  }
}
`;
