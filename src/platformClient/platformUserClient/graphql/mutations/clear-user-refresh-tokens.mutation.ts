import { gql } from 'apollo-server-express';

export const clearUserRefreshTokensMutation = gql`
  mutation clearUserRefreshTokens($userId: ID!) {
    deleteUserTokens(filter: { userId: { equalTo: $userId } })
  }
`;
