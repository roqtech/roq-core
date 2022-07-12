import { gql } from '@apollo/client/core';

export const triggerEventMutation = gql`
  mutation TriggerEvent($event: EventCreateDto!) {
    triggerEvent(event: $event)
  }
`;
