import { gql } from '@apollo/client/core';

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
