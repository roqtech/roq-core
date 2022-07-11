import { gql } from 'apollo-server-express';

export const userProviderQuery = gql`
query userProviders($providerIdentifier: String, $providerUserIdentifier: String) {
  userProviders(
    filter: {
      providerIdentifier: { equalTo: $providerIdentifier }
      providerUserIdentifier: { equalTo: $providerUserIdentifier }
    }
    limit: 1
  ) {
    data {
      id
      userId
      optedIn
    }
  }
}
`;
