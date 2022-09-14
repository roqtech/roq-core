import { QueryFilterInterface, QueryOrderInterface } from 'src/library/interfaces';

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
  order?: QueryOrderInterface
  filter?: QueryFilterInterface;
}
