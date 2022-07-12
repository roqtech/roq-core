import { gql } from '@apollo/client/core';

export const sendMailMutation = gql`
  mutation sendMail($payload: MailSendDto!) {
    sendMail(params: $payload)
  }
`;
