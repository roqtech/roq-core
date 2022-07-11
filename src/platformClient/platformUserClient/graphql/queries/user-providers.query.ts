import { gql } from 'apollo-server-express';

export const userProvidersQuery = gql`
query userProviders($userId: ID) {
  userProviders(filter: { userId: { equalTo: $userId }, optedIn: { equalTo: true } }) {
    data {
      id
      userId
      optedIn
      providerIdentifier
    }
  }
}
`;
