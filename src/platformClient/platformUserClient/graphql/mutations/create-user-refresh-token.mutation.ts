import { gql } from '@apollo/client/core';

export const createUserRefreshTokenMutation = gql`
mutation createUserRefreshToken($userToken: UserRefreshTokenCreateDto!) {
  createUserRefreshToken(userToken: $userToken) {
    id
    token
  }
}
`;
