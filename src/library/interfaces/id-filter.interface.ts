import {
  EqualToFilterInterface,
  NotEqualToFilterInterface,
  ValueInFilterInterface,
  ValueNotInFilterInterface,
} from '../interfaces'

export interface IdFilterInterface
  extends EqualToFilterInterface<string>,
    NotEqualToFilterInterface<string>,
    ValueInFilterInterface<string>,
    ValueNotInFilterInterface<string> {}
