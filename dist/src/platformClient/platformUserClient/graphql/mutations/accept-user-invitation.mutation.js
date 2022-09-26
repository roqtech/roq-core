"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptUserInvitationMutation = void 0;
const core_1 = require("@apollo/client/core");
const fragments_1 = require("../../../../platformClient/platformUserClient/graphql/fragments");
exports.acceptUserInvitationMutation = (0, core_1.gql) `
  ${fragments_1.userInviteFragment}
  mutation AcceptUserInvitation($acceptUserInvite: AcceptUserInviteDto!) {
    acceptUserInvite(acceptUserInvite: $acceptUserInvite) {
      ...UserInvite
    }
  }
`;
