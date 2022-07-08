export interface GraphqlRequestLogInterface {
  operationName: string
  graphql: string
  url?: string
  headers?: unknown
  variables?: unknown
}
