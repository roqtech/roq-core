import { EventNameEnum } from '../enums';

export interface EventInterface {
  id: string;
  name: EventNameEnum | string;
  object: string;
  data?: Record<string, unknown>;
}
