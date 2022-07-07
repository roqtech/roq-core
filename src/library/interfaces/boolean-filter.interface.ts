import { EqualToFilterInterface, NotEqualToFilterInterface } from '../interfaces';

export interface BooleanFilterInterface extends EqualToFilterInterface<boolean>, NotEqualToFilterInterface<boolean> {}
