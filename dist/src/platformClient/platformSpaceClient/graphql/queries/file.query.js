"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.fileQuery = (0, core_1.gql) `
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
  }
}
`;
