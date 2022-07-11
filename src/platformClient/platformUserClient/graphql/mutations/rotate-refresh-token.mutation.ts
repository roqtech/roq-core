import { gql } from 'apollo-server-express';

export const rotateRefreshTokenMutation = gql`
mutation rotateRefreshToken($token: String!) {
  rotateRefreshToken(userToken: { token: $token }) {
    id
    token
  }
}
`;
