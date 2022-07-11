import { gql } from 'apollo-server-express';

export const createUserProviderMutation = gql`
mutation createUserProvider($userProvider: UserProviderCreateDto!) {
  createUserProvider(userProvider: $userProvider) {
    id
  }
}
`;
