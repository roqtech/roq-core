"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserTokensMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.deleteUserTokensMutation = (0, core_1.gql) `
mutation deleteUserTokens($userId: ID) {
  deleteUserTokens(filter: { userId: { equalTo: $userId }})
}
`;
