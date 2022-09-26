"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.createUserMutation = (0, core_1.gql) `
mutation createUser($user: UserCreateDto!) {
  createUser(user: $user) {
    id
  }
}
`;
