// eslint-disable-next-line @roq/filename-suffix-mismatch
import { DocumentNode } from 'graphql';
import { get } from 'lodash';

export const getGqlOperationName = (graphql: DocumentNode): string => get(graphql, 'definitions[0].selectionSet.selections[0].name.value', 'unknown');
