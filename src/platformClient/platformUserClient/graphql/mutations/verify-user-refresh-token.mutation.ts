import { gql } from '@apollo/client/core'

export const verifyUserRefreshTokenMutation = gql`
  mutation verifyUserRefreshToken($userToken: UserRefreshTokenVerifyDto!) {
    verifyUserRefreshToken(userToken: $userToken) {
      id
      userId
      validTill
    }
  }
`
