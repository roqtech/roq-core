import { ASTNode, GraphQLError, Kind, ValidationContext } from 'graphql';

function determineDepth(
  node: ASTNode,
  fragments,
  depthSoFar: number,
  maxDepth: number,
  operationName: string,
  ignoreFieldNames?: string[]
) {
  if (depthSoFar > maxDepth) {
    throw new Error(
      `'${operationName}' exceeds maximum operation depth of ${maxDepth}`
    );
  }
  switch (node.kind) {
    case Kind.FIELD:
       // by default, ignore the introspection fields which begin with double underscores and explicit fields
       const shouldIgnore = /^__/.test(node.name.value);
      const isIgnoreField = ignoreFieldNames && ignoreFieldNames.includes(node.name.value);
      if (shouldIgnore || !node.selectionSet) {
        return 0;
      }
      if(isIgnoreField && node.selectionSet)
      {
        return Math.max(
          ...node.selectionSet.selections.map((selection) =>
            determineDepth(
              selection,
              fragments,
              depthSoFar,
              maxDepth,
              operationName,
              ignoreFieldNames
            )
          )
        );
      }
      return (
        1 +
        Math.max(
          ...node.selectionSet.selections.map((selection) =>
            determineDepth(
              selection,
              fragments,
              depthSoFar + 1,
              maxDepth,
              operationName,
              ignoreFieldNames
            )
          )
        )
      );
    case Kind.FRAGMENT_SPREAD:
      return determineDepth(
        fragments[node.name.value],
        fragments,
        depthSoFar,
        maxDepth,
        operationName,
        ignoreFieldNames
      );
    case Kind.INLINE_FRAGMENT:
    case Kind.FRAGMENT_DEFINITION:
    case Kind.OPERATION_DEFINITION:
      return Math.max(
        ...node.selectionSet.selections.map((selection) =>
          determineDepth(
            selection,
            fragments,
            depthSoFar,
            maxDepth,
            operationName,
            ignoreFieldNames
          )
        )
      );
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
export const queryDepthValidation =
  (maxDepth: number, ignoreFieldNames?: string[]) =>
  (context: ValidationContext): ValidationContext => {
    try {
      const { definitions } = context.getDocument();
      const fragments = definitions.reduce((map, definition) => {
        if (definition.kind === Kind.FRAGMENT_DEFINITION) {
          map[definition.name.value] = definition;
        }
        return map;
      }, {});
      // Get get both queries and mutations and treat both are same
      const queries= definitions.reduce((map, definition) => {
        if (definition.kind === Kind.OPERATION_DEFINITION) {
          map[definition.name ? definition.name.value : ''] = definition;
        }
        return map;
      }, {});

      for (const name in queries) {
        if(maxDepth)
        {
          determineDepth(
            queries[name],
            fragments,
            0,
            maxDepth,
            name,
            ignoreFieldNames
          );
        }
      }
      return context;
    } catch (err) {
      context.reportError(new GraphQLError(err.message));
      return context;
    }
  };
