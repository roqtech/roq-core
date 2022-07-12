import { gql } from '@apollo/client/core';

export const deleteUserTokensMutation = gql`
mutation deleteUserTokens($userId: ID) {
  deleteUserTokens(filter: { userId: { equalTo: $userId }})
}
`;
