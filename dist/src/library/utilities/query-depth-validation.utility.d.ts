import { ValidationContext } from 'graphql';
/**
 * Creates a validator for the GraphQL query depth
 * @param {Number} maxDepth - The maximum allowed depth for any operation in a GraphQL document.
 * @param {Object} [ignoreFieldNames] fields name which to ignore in depth calculation
 * @returns {Function} The validator function for GraphQL validation phase.
 */
export declare const queryDepthValidation: (maxDepth: number, ignoreFieldNames?: string[]) => (context: ValidationContext) => ValidationContext;
