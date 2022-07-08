import { gql } from '@apollo/client/core'

export const createUserResetPasswordTokenMutation = gql`
  mutation createUserResetPasswordToken($userToken: UserResetPasswordTokenCreateDto!) {
    createUserResetPasswordToken(userToken: $userToken) {
      id
      token
    }
  }
`
