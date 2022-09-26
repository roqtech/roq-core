import { GraphQLError } from 'graphql';
export declare type GraphqlExceptionType = {
    graphQLErrors?: GraphQLError[];
} & GraphQLError;
