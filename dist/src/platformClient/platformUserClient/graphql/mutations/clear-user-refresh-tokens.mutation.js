"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUserRefreshTokensMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.clearUserRefreshTokensMutation = (0, core_1.gql) `
  mutation clearUserRefreshTokens($userId: ID!) {
    deleteUserTokens(filter: { userId: { equalTo: $userId } })
  }
`;
