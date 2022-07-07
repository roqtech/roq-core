import { gql } from '@apollo/client/core';
import { userInviteTokenFragment } from '@src/platformClient/platformUserClient/graphql/fragments';

export const userInviteFragment = gql`
  ${userInviteTokenFragment}
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
