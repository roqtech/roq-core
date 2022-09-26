"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTokenQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.userTokenQuery = (0, core_1.gql) `
query userToken($filter: UserTokenFilterArgType, $order: UserTokenOrderArgType) {
  userTokens(filter: $filter, limit: 1, order: $order) {
    data {
      id
      token
      userId
      validTill
    }
  }
}
`;
