import { gql } from 'apollo-server-express';

export const createUserMutation = gql`
mutation createUser($user: UserCreateDto!) {
  createUser(user: $user) {
    id
  }
}
`;
