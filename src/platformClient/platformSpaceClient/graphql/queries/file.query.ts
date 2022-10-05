import { gql } from '@apollo/client/core';

export const fileQuery = gql`
query file($fileId: ID!) {
  file(fileId: $fileId) {
    id
    name
    customMetaData
    status
    url
    contentType
    createdAt
    updatedAt
    isPublic
  }
}
`;
