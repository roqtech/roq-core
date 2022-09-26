"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserProvidersMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.deleteUserProvidersMutation = (0, core_1.gql) `
mutation deleteUserProviders($filter: UserProviderBulkFilterArgType!) {
    deleteUserProviders(filter: $filter)
}
`;
