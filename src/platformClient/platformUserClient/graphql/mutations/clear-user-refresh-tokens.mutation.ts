import { gql } from '@apollo/client/core';

export const clearUserRefreshTokensMutation = gql`
  mutation clearUserRefreshTokens($userId: ID!) {
    deleteUserTokens(filter: { userId: { equalTo: $userId } })
  }
`;
