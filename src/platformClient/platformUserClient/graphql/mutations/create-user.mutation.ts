import { gql } from '@apollo/client/core';

export const createUserMutation = gql`
mutation createUser($user: UserCreateDto!) {
  createUser(user: $user) {
    id
  }
}
`;
