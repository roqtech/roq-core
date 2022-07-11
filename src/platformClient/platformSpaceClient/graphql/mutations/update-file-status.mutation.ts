import { gql } from 'apollo-server-express';

export const updateFileStatusMutation = gql`
mutation updateFileStatus($fileId: ID!, $status: FileStatusEnum!) {
  updateFileStatus(fileId: $fileId, status: $status) {
    id
    name
    customMetaData
    status
    url
    contentType
    createdAt
    updatedAt
  }
}
`;
