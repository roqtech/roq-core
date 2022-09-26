"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidateEmailTokenMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.createUserValidateEmailTokenMutation = (0, core_1.gql) `
mutation createUserValidateEmailToken($userToken: UserValidateEmailTokenCreateDto!) {
  createUserValidateEmailToken(userToken: $userToken) {
    id
    token
  }
}
`;
