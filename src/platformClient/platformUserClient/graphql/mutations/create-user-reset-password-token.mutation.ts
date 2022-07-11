import { gql } from 'apollo-server-express';

export const createUserResetPasswordTokenMutation = gql`
mutation createUserResetPasswordToken($userToken: UserResetPasswordTokenCreateDto!) {
  createUserResetPasswordToken(userToken: $userToken) {
    id
    token
  }
}
`;
