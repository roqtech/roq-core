import { gql } from '@apollo/client/core'

export const checkUserRestorePasswordTokenQuery = gql`
  query checkUserRestorePasswordToken($token: String!, $type: String!) {
    checkUserToken(token: $token, type: $type) {
      isExpired
      isValid
      email
    }
  }
`
