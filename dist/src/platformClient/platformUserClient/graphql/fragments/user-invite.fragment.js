"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInviteFragment = void 0;
const core_1 = require("@apollo/client/core");
const fragments_1 = require("../../../../platformClient/platformUserClient/graphql/fragments");
exports.userInviteFragment = (0, core_1.gql) `
  ${fragments_1.userInviteTokenFragment}
  fragment UserInvite on UserInviteModel{
      id
      email,
      firstName,
      lastName
      locale
      data
      status
      createdByUserId
      acceptedByUserId
      userTokenId
      updatedAt
      createdAt
      statusUpdatedAt
      userToken{
          ...UserInviteToken
      }
  }
`;
