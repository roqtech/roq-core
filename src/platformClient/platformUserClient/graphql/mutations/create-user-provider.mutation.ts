import { gql } from '@apollo/client/core';

export const createUserProviderMutation = gql`
mutation createUserProvider($userProvider: UserProviderCreateDto!) {
  createUserProvider(userProvider: $userProvider) {
    id
  }
}
`;
