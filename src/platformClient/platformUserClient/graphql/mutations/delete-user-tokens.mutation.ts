import { gql } from 'apollo-server-express';

export const deleteUserTokensMutation = gql`
mutation deleteUserTokens($userId: ID) {
  deleteUserTokens(filter: { userId: { equalTo: $userId }})
}
`;
