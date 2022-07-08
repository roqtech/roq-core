import { gql } from '@apollo/client/core'

export const createFileUploadUrlMutation = gql`
  mutation createFileUploadUrl(
    $fileName: String!
    $fileType: String!
    $fileCategory: String!
    $customMetaData: JsonObject
    $fileAssociationOptions: [FileAssociationCreateDto!]
  ) {
    createFileUploadUrl(
      createFileDto: {
        name: $fileName
        contentType: $fileType
        fileCategory: $fileCategory
        customMetaData: $customMetaData
        fileAssociationOptions: $fileAssociationOptions
      }
    ) {
      id
      name
      customMetaData
      status
      contentType
      uploadUrl
      isPublic
      createdAt
      updatedAt
    }
  }
`
