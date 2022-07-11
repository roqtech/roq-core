import { gql } from 'apollo-server-express';

export const verifyUserRefreshTokenMutation = gql`
mutation verifyUserRefreshToken($userToken: UserRefreshTokenVerifyDto!) {
  verifyUserRefreshToken(userToken: $userToken) {
    id
    userId
    validTill
  }
}
`;
