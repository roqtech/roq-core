"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileUploadUrlMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.createFileUploadUrlMutation = (0, core_1.gql) `
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
`;
