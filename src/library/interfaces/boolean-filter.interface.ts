import { EqualToFilterInterface, NotEqualToFilterInterface } from 'src/library/interfaces';

export interface BooleanFilterInterface extends EqualToFilterInterface<boolean>, NotEqualToFilterInterface<boolean> {}
