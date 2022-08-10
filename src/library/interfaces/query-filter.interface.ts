import { DateFilterInterface, IdFilterInterface } from 'src/library/interfaces';

export interface QueryFilterInterface {
  id?: IdFilterInterface;
  createdAt?: DateFilterInterface;
  updatedAt?: DateFilterInterface;
}
