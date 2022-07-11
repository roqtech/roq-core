import { gql } from 'apollo-server-express';

export const deleteUserProvidersMutation = gql`
mutation deleteUserProviders($filter: UserProviderBulkFilterArgType!) {
    deleteUserProviders(filter: $filter)
}
`;
