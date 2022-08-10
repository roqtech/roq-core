/* eslint-disable @typescript-eslint/naming-convention */
import { registerEnumType } from '@nestjs/graphql';

export enum OperatorEnum {
  equalTo = '=',
  notEqualTo = '!=',
  moreThan = '>',
  lessThan = '<',
  moreThanEqual = '>=',
  lessThanEqual = '<=',
  valueIn = 'IN',
  valueNotIn = 'NOT IN',
  like = 'like',
  iLike = 'iLike',
}

registerEnumType(OperatorEnum, {
  name: 'OperatorEnum',
});
