export interface TriggerEventMutationArgs {
  id: string;
  name: string;
  object: string;
  data?: Record<string, unknown>;
}
