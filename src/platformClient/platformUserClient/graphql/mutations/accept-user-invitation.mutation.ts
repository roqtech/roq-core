import { gql } from '@apollo/client/core'
import { userInviteFragment } from '../fragments'

export const acceptUserInvitationMutation = gql`
  ${userInviteFragment}
  mutation AcceptUserInvitation($acceptUserInvite: AcceptUserInviteDto!) {
    acceptUserInvite(acceptUserInvite: $acceptUserInvite) {
      ...UserInvite
    }
  }
`
