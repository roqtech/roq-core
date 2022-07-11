import { gql } from 'apollo-server-express';

export const createUserRefreshTokenMutation = gql`
mutation createUserRefreshToken($userToken: UserRefreshTokenCreateDto!) {
  createUserRefreshToken(userToken: $userToken) {
    id
    token
  }
}
`;
