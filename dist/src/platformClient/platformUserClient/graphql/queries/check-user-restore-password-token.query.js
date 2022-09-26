"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserRestorePasswordTokenQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.checkUserRestorePasswordTokenQuery = (0, core_1.gql) `
query checkUserRestorePasswordToken($token: String!, $type: String!) {
  checkUserToken(token: $token, type: $type) {
    isExpired
    isValid
    email
  }
}
`;
