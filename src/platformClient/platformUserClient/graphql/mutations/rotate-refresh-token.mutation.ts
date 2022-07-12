import { gql } from '@apollo/client/core';

export const rotateRefreshTokenMutation = gql`
mutation rotateRefreshToken($token: String!) {
  rotateRefreshToken(userToken: { token: $token }) {
    id
    token
  }
}
`;
