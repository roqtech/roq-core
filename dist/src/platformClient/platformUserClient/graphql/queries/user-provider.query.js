"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviderQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.userProviderQuery = (0, core_1.gql) `
query userProviders($providerIdentifier: String, $providerUserIdentifier: String) {
  userProviders(
    filter: {
      providerIdentifier: { equalTo: $providerIdentifier }
      providerUserIdentifier: { equalTo: $providerUserIdentifier }
    }
    limit: 1
  ) {
    data {
      id
      userId
      optedIn
    }
  }
}
`;
