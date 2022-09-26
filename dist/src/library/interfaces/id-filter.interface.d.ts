import { EqualToFilterInterface, NotEqualToFilterInterface, ValueInFilterInterface, ValueNotInFilterInterface } from '../../library/interfaces';
export interface IdFilterInterface extends EqualToFilterInterface<string>, NotEqualToFilterInterface<string>, ValueInFilterInterface<string>, ValueNotInFilterInterface<string> {
}
