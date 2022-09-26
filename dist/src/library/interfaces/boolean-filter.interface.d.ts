import { EqualToFilterInterface, NotEqualToFilterInterface } from '../../library/interfaces';
export interface BooleanFilterInterface extends EqualToFilterInterface<boolean>, NotEqualToFilterInterface<boolean> {
}
