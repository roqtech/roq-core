"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordTokenQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.resetPasswordTokenQuery = (0, core_1.gql) `
query resetPasswordToken($token: String!) {
  userTokens(filter: { token: { equalTo: $token }, type: { equalTo: "resetPassword"} }, limit: 1) {
    data {
      id
      token
      userId
      validTill
    }
  }
}
`;
