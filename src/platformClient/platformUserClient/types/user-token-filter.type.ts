import { BooleanFilterArgType, DateFilterArgType, IdFilterArgType, StringFilterArgType } from 'src/platformClient/types';
/* eslint-disable @typescript-eslint/naming-convention */

type UserTokenFilterArgType = {
  id?: IdFilterArgType | null;
  token?: StringFilterArgType | null;
  type?: StringFilterArgType | null;
  userId?: IdFilterArgType | null;
  userInviteId?: IdFilterArgType | null;
  validTill?: DateFilterArgType | null;
};

type UserProviderFilterArgType = {
  id?: IdFilterArgType | null;
  optedIn?: BooleanFilterArgType | null;
  providerIdentifier?: StringFilterArgType | null;
  providerUserIdentifier?: StringFilterArgType | null;
  userId?: IdFilterArgType | null;
};

enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

enum UserTokenOrderSortEnum {
  CreatedAt = 'createdAt',
  Token = 'token',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  ValidTill = 'validTill'
}

type UserTokenOrderArgType = {
  order: OrderEnum | `${OrderEnum}`;
  sort: UserTokenOrderSortEnum | `${UserTokenOrderSortEnum}`;
};

enum UserTokenSearchKeyEnum {
  Token = 'TOKEN',
  Type = 'TYPE'
}

type UserTokenSearchArgType = {
  key: UserTokenSearchKeyEnum | `${UserTokenSearchKeyEnum}`;
  value: string;
};

export interface UserTokensQueryArgs {
  filter?: UserTokenFilterArgType | null;
  limit?: number | null;
  offset?: number | null;
  order?: UserTokenOrderArgType | null;
  search?: UserTokenSearchArgType | null;
}

enum UserProviderOrderSortEnum {
  CreatedAt = 'CREATED_AT',
  OptedIn = 'OPTED_IN',
  ProviderIdentifier = 'PROVIDER_IDENTIFIER',
  ProviderUserIdentifier = 'PROVIDER_USER_IDENTIFIER',
  UpdatedAt = 'UPDATED_AT'
}

type UserProviderOrderArgType = {
  order: OrderEnum | `${OrderEnum}`;
  sort: UserProviderOrderSortEnum | `${UserProviderOrderSortEnum}`;
};

enum UserProviderSearchKeyEnum {
  ProviderIdentifier = 'PROVIDER_IDENTIFIER',
  ProviderUserIdentifier = 'PROVIDER_USER_IDENTIFIER'
}

type UserProviderSearchArgType = {
  key: UserProviderSearchKeyEnum | `${UserProviderSearchKeyEnum}`;
  value: string;
};

export interface UserProvidersQueryArgs {
  filter?: UserProviderFilterArgType | null;
  limit?: number | null;
  offset?: number | null;
  order?: UserProviderOrderArgType | null;
  search?: UserProviderSearchArgType | null;
}
