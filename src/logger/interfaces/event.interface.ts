import { EventNameEnum } from '@src/logger/enums';

export interface EventInterface {
  id: string;
  name: EventNameEnum | string;
  object: string;
  data?: Record<string, unknown>;
}
