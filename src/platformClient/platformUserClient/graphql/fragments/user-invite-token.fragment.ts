import { gql } from '@apollo/client/core';

export const userInviteTokenFragment = gql`
    fragment UserInviteToken on UserTokenModel {
      id
      token
      type
      validTill
      userId
      createdAt
      updatedAt
    }
`;
