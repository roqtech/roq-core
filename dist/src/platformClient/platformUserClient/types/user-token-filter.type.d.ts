import { BooleanFilterArgType, DateFilterArgType, IdFilterArgType, StringFilterArgType } from '../../../platformClient/types';
declare type UserTokenFilterArgType = {
    id?: IdFilterArgType | null;
    token?: StringFilterArgType | null;
    type?: StringFilterArgType | null;
    userId?: IdFilterArgType | null;
    userInviteId?: IdFilterArgType | null;
    validTill?: DateFilterArgType | null;
};
declare type UserProviderFilterArgType = {
    id?: IdFilterArgType | null;
    optedIn?: BooleanFilterArgType | null;
    providerIdentifier?: StringFilterArgType | null;
    providerUserIdentifier?: StringFilterArgType | null;
    userId?: IdFilterArgType | null;
};
declare enum OrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
declare enum UserTokenOrderSortEnum {
    CreatedAt = "createdAt",
    Token = "token",
    Type = "type",
    UpdatedAt = "updatedAt",
    ValidTill = "validTill"
}
declare type UserTokenOrderArgType = {
    order: OrderEnum | `${OrderEnum}`;
    sort: UserTokenOrderSortEnum | `${UserTokenOrderSortEnum}`;
};
declare enum UserTokenSearchKeyEnum {
    Token = "TOKEN",
    Type = "TYPE"
}
declare type UserTokenSearchArgType = {
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
declare enum UserProviderOrderSortEnum {
    CreatedAt = "CREATED_AT",
    OptedIn = "OPTED_IN",
    ProviderIdentifier = "PROVIDER_IDENTIFIER",
    ProviderUserIdentifier = "PROVIDER_USER_IDENTIFIER",
    UpdatedAt = "UPDATED_AT"
}
declare type UserProviderOrderArgType = {
    order: OrderEnum | `${OrderEnum}`;
    sort: UserProviderOrderSortEnum | `${UserProviderOrderSortEnum}`;
};
declare enum UserProviderSearchKeyEnum {
    ProviderIdentifier = "PROVIDER_IDENTIFIER",
    ProviderUserIdentifier = "PROVIDER_USER_IDENTIFIER"
}
declare type UserProviderSearchArgType = {
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
export {};
