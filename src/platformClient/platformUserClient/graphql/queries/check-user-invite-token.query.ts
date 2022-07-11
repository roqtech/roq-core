import { gql } from 'apollo-server-express';

export const checkUserInviteTokenQuery = gql`
query CheckUserInviteToken($token: String!) {
  checkUserInviteToken(token: $token) {
    email
    isExpired
    isValid
  }
}
`;
