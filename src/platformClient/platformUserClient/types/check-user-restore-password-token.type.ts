export interface CheckUserRestorePasswordToken {
  isValid: boolean
  isExpired?: boolean
  email?: string
}
