"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFileStatusMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.updateFileStatusMutation = (0, core_1.gql) `
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
