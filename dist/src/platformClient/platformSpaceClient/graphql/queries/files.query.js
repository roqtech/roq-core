"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesQuery = void 0;
const core_1 = require("@apollo/client/core");
exports.filesQuery = (0, core_1.gql) `
  query files(
    $entityIdentifiers: IdFilterArgType!
    $entityName: EntityNameFilterArgType!
    $fileCategory: StringFilterArgType!
    $order: FileOrderArgType
    $limit: Int
  ) {
    files(
      order: $order
      limit: $limit
      filter: { entityName: $entityName, entityIdentifiers: $entityIdentifiers, fileCategory: $fileCategory }
    ) {
      data {
        id
        createdByUserId
        url
        status
        name
        customMetaData
        fileAssociations {
          data {
            entityIdentifier
            entityName
          }
        }
      }
    }
  }
`;
