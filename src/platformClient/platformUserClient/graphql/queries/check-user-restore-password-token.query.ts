import { gql } from 'apollo-server-express';

export const checkUserRestorePasswordTokenQuery = gql`
query checkUserRestorePasswordToken($token: String!, $type: String!) {
  checkUserToken(token: $token, type: $type) {
    isExpired
    isValid
    email
  }
}
`;
