import { gql } from 'apollo-server-express';

export const sendMailMutation = gql`
  mutation sendMail($payload: MailSendDto!) {
    sendMail(params: $payload)
  }
`;
