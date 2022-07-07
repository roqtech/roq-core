import { OrderEnum } from '@src/library/enums';
import { QueryFilterInterface } from '@src/library/interfaces';

export interface QueryInterface {
  offset?: number;
  limit?: number;
  fields?: string[];
  search?: {
    key: string;
    value: string;
  };
  id?: string;
  ids?: string[];
  order?: {
    order: OrderEnum;
    sort: string;
  };
  filter?: QueryFilterInterface;
}
