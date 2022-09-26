"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGqlOperationName = void 0;
const lodash_1 = require("lodash");
const getGqlOperationName = (graphql) => (0, lodash_1.get)(graphql, 'definitions[0].selectionSet.selections[0].name.value', 'unknown');
exports.getGqlOperationName = getGqlOperationName;
