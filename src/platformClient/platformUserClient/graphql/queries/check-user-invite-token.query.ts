import { gql } from '@apollo/client/core'

export const checkUserInviteTokenQuery = gql`
  query CheckUserInviteToken($token: String!) {
    checkUserInviteToken(token: $token) {
      email
      isExpired
      isValid
    }
  }
`
