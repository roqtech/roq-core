import { gql } from '@apollo/client/core';
import { userInviteFragment } from '@src/platformClient/platformUserClient/graphql/fragments';

export const updateUserInviteMutation = gql`
${userInviteFragment}
mutation updateUserInvite($id: ID!, $userInvite: UserInviteUpdateDto!) {
  updateUserInvite(id: $id, userInvite: $userInvite) {
    ...UserInvite
  }
}
`;
