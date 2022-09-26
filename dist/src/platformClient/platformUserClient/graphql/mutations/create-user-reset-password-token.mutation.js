"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserResetPasswordTokenMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.createUserResetPasswordTokenMutation = (0, core_1.gql) `
mutation createUserResetPasswordToken($userToken: UserResetPasswordTokenCreateDto!) {
  createUserResetPasswordToken(userToken: $userToken) {
    id
    token
  }
}
`;
