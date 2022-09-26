import { GraphQLError, GraphQLFormattedError } from 'graphql';
export declare const prepareError: (defaultMessage: string, errorCode: string, error?: any) => string;
export declare const formatGqlErrors: (err: GraphQLError) => GraphQLFormattedError;
