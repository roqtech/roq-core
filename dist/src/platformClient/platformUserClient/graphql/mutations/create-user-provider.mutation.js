"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserProviderMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.createUserProviderMutation = (0, core_1.gql) `
mutation createUserProvider($userProvider: UserProviderCreateDto!) {
  createUserProvider(userProvider: $userProvider) {
    id
  }
}
`;
