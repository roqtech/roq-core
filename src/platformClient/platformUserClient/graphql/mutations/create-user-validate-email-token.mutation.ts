import { gql } from 'apollo-server-express';

export const createUserValidateEmailTokenMutation = gql`
mutation createUserValidateEmailToken($userToken: UserValidateEmailTokenCreateDto!) {
  createUserValidateEmailToken(userToken: $userToken) {
    id
    token
  }
}
`;
