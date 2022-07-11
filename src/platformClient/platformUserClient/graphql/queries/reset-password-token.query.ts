import { gql } from 'apollo-server-express';

export const resetPasswordTokenQuery = gql`
query resetPasswordToken($token: String!) {
  userTokens(filter: { token: { equalTo: $token }, type: { equalTo: "resetPassword"} }, limit: 1) {
    data {
      id
      token
      userId
      validTill
    }
  }
}
`;
