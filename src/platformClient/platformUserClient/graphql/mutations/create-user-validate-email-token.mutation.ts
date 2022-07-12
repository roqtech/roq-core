import { gql } from '@apollo/client/core';

export const createUserValidateEmailTokenMutation = gql`
mutation createUserValidateEmailToken($userToken: UserValidateEmailTokenCreateDto!) {
  createUserValidateEmailToken(userToken: $userToken) {
    id
    token
  }
}
`;
