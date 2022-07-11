import { gql } from 'apollo-server-express';

export const userTokenQuery = gql`
query userToken($filter: UserTokenFilterArgType, $order: UserTokenOrderArgType) {
  userTokens(filter: $filter, limit: 1, order: $order) {
    data {
      id
      token
      userId
      validTill
    }
  }
}
`;
