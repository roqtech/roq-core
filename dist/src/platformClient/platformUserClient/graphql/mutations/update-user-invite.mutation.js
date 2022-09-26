"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInviteMutation = void 0;
const core_1 = require("@apollo/client/core");
const fragments_1 = require("../../../../platformClient/platformUserClient/graphql/fragments");
exports.updateUserInviteMutation = (0, core_1.gql) `
${fragments_1.userInviteFragment}
mutation updateUserInvite($id: ID!, $userInvite: UserInviteUpdateDto!) {
  updateUserInvite(id: $id, userInvite: $userInvite) {
    ...UserInvite
  }
}
`;
