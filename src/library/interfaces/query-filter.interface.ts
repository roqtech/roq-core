import { DateFilterInterface, IdFilterInterface } from '../interfaces'

export interface QueryFilterInterface {
  id?: IdFilterInterface
  createdAt?: DateFilterInterface
  updatedAt?: DateFilterInterface
}
