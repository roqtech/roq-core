"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryDepthValidation = void 0;
const graphql_1 = require("graphql");
function determineDepth(node, fragments, depthSoFar, maxDepth, operationName, ignoreFieldNames) {
    if (depthSoFar > maxDepth) {
        throw new Error(`'${operationName}' exceeds maximum operation depth of ${maxDepth}`);
    }
    switch (node.kind) {
        case graphql_1.Kind.FIELD:
            // by default, ignore the introspection fields which begin with double underscores and explicit fields
            const shouldIgnore = /^__/.test(node.name.value);
            const isIgnoreField = ignoreFieldNames && ignoreFieldNames.includes(node.name.value);
            if (shouldIgnore || !node.selectionSet) {
                return 0;
            }
            if (isIgnoreField && node.selectionSet) {
                return Math.max(...node.selectionSet.selections.map((selection) => determineDepth(selection, fragments, depthSoFar, maxDepth, operationName, ignoreFieldNames)));
            }
            return (1 +
                Math.max(...node.selectionSet.selections.map((selection) => determineDepth(selection, fragments, depthSoFar + 1, maxDepth, operationName, ignoreFieldNames))));
        case graphql_1.Kind.FRAGMENT_SPREAD:
            return determineDepth(fragments[node.name.value], fragments, depthSoFar, maxDepth, operationName, ignoreFieldNames);
        case graphql_1.Kind.INLINE_FRAGMENT:
        case graphql_1.Kind.FRAGMENT_DEFINITION:
        case graphql_1.Kind.OPERATION_DEFINITION:
            return Math.max(...node.selectionSet.selections.map((selection) => determineDepth(selection, fragments, depthSoFar, maxDepth, operationName, ignoreFieldNames)));
        default:
            throw new Error('Depth crawler cannot handle:' + node.kind);
    }
}
/**
 * Creates a validator for the GraphQL query depth
 * @param {Number} maxDepth - The maximum allowed depth for any operation in a GraphQL document.
 * @param {Object} [ignoreFieldNames] fields name which to ignore in depth calculation
 * @returns {Function} The validator function for GraphQL validation phase.
 */
const queryDepthValidation = (maxDepth, ignoreFieldNames) => (context) => {
    try {
        const { definitions } = context.getDocument();
        const fragments = definitions.reduce((map, definition) => {
            if (definition.kind === graphql_1.Kind.FRAGMENT_DEFINITION) {
                map[definition.name.value] = definition;
            }
            return map;
        }, {});
        // Get get both queries and mutations and treat both are same
        const queries = definitions.reduce((map, definition) => {
            if (definition.kind === graphql_1.Kind.OPERATION_DEFINITION) {
                map[definition.name ? definition.name.value : ''] = definition;
            }
            return map;
        }, {});
        for (const name in queries) {
            if (maxDepth) {
                determineDepth(queries[name], fragments, 0, maxDepth, name, ignoreFieldNames);
            }
        }
        return context;
    }
    catch (err) {
        context.reportError(new graphql_1.GraphQLError(err.message));
        return context;
    }
};
exports.queryDepthValidation = queryDepthValidation;
