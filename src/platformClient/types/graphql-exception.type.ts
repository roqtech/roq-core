import { GraphQLError } from 'graphql'

export type GraphqlExceptionType = {
  graphQLErrors?: GraphQLError[]
} & GraphQLError
