import { gql } from '@apollo/client/core';

export const deleteUserProvidersMutation = gql`
mutation deleteUserProviders($filter: UserProviderBulkFilterArgType!) {
    deleteUserProviders(filter: $filter)
}
`;
