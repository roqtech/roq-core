import { gql } from 'apollo-server-express';
import { userInviteFragment } from 'src/platformClient/platformUserClient/graphql/fragments';

export const acceptUserInvitationMutation = gql`
  ${userInviteFragment}
  mutation AcceptUserInvitation($acceptUserInvite: AcceptUserInviteDto!) {
    acceptUserInvite(acceptUserInvite: $acceptUserInvite) {
      ...UserInvite
    }
  }
`;
