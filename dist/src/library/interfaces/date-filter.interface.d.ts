import { EqualToFilterInterface, LessThanEqualFilterInterface, LessThanFilterInterface, MoreThanEqualFilterInterface, MoreThanFilterInterface, NotEqualToFilterInterface } from '../../library/interfaces';
export interface DateFilterInterface extends LessThanFilterInterface<Date>, MoreThanFilterInterface<Date>, MoreThanEqualFilterInterface<Date>, LessThanEqualFilterInterface<Date>, EqualToFilterInterface<Date>, NotEqualToFilterInterface<Date> {
}
