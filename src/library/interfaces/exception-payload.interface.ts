export interface ExceptionPayload {
  message: string
  variables?: Record<string, unknown>
  errorCode: string
}
