import {
  EqualToFilterInterface,
  LessThanEqualFilterInterface,
  LessThanFilterInterface,
  MoreThanEqualFilterInterface,
  MoreThanFilterInterface,
  NotEqualToFilterInterface,
  ValueInFilterInterface,
  ValueNotInFilterInterface,
} from '../interfaces';

export interface NumberFilterInterface
  extends EqualToFilterInterface<number>,
    NotEqualToFilterInterface<number>,
    ValueInFilterInterface<number>,
    ValueNotInFilterInterface<number>,
    LessThanFilterInterface<number>,
    MoreThanFilterInterface<number>,
    MoreThanEqualFilterInterface<number>,
    LessThanEqualFilterInterface<number> {}
