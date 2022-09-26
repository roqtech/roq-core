import { DateFilterInterface, IdFilterInterface } from '../../library/interfaces';
export interface QueryFilterInterface {
    id?: IdFilterInterface;
    createdAt?: DateFilterInterface;
    updatedAt?: DateFilterInterface;
}
