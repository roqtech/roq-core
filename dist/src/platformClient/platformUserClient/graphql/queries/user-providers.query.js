"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvidersQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.userProvidersQuery = (0, core_1.gql) `
query userProviders($userId: ID) {
  userProviders(filter: { userId: { equalTo: $userId }, optedIn: { equalTo: true } }) {
    data {
      id
      userId
      optedIn
      providerIdentifier
    }
  }
}
`;
