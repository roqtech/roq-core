import { gql } from 'apollo-server-express';

export const triggerEventMutation = gql`
  mutation TriggerEvent($event: EventCreateDto!) {
    triggerEvent(event: $event)
  }
`;
