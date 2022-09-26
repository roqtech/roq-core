"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["Asc"] = "ASC";
    OrderEnum["Desc"] = "DESC";
})(OrderEnum || (OrderEnum = {}));
var UserTokenOrderSortEnum;
(function (UserTokenOrderSortEnum) {
    UserTokenOrderSortEnum["CreatedAt"] = "createdAt";
    UserTokenOrderSortEnum["Token"] = "token";
    UserTokenOrderSortEnum["Type"] = "type";
    UserTokenOrderSortEnum["UpdatedAt"] = "updatedAt";
    UserTokenOrderSortEnum["ValidTill"] = "validTill";
})(UserTokenOrderSortEnum || (UserTokenOrderSortEnum = {}));
var UserTokenSearchKeyEnum;
(function (UserTokenSearchKeyEnum) {
    UserTokenSearchKeyEnum["Token"] = "TOKEN";
    UserTokenSearchKeyEnum["Type"] = "TYPE";
})(UserTokenSearchKeyEnum || (UserTokenSearchKeyEnum = {}));
var UserProviderOrderSortEnum;
(function (UserProviderOrderSortEnum) {
    UserProviderOrderSortEnum["CreatedAt"] = "CREATED_AT";
    UserProviderOrderSortEnum["OptedIn"] = "OPTED_IN";
    UserProviderOrderSortEnum["ProviderIdentifier"] = "PROVIDER_IDENTIFIER";
    UserProviderOrderSortEnum["ProviderUserIdentifier"] = "PROVIDER_USER_IDENTIFIER";
    UserProviderOrderSortEnum["UpdatedAt"] = "UPDATED_AT";
})(UserProviderOrderSortEnum || (UserProviderOrderSortEnum = {}));
var UserProviderSearchKeyEnum;
(function (UserProviderSearchKeyEnum) {
    UserProviderSearchKeyEnum["ProviderIdentifier"] = "PROVIDER_IDENTIFIER";
    UserProviderSearchKeyEnum["ProviderUserIdentifier"] = "PROVIDER_USER_IDENTIFIER";
})(UserProviderSearchKeyEnum || (UserProviderSearchKeyEnum = {}));
