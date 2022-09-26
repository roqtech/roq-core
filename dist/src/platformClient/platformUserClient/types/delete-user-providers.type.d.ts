import { BooleanFilterArgType, IdFilterArgType, StringFilterArgType } from '../../../platformClient/types';
declare type UserProviderFilterArgType = {
    id?: IdFilterArgType | null;
    optedIn?: BooleanFilterArgType | null;
    providerIdentifier?: StringFilterArgType | null;
    providerUserIdentifier?: StringFilterArgType | null;
    userId?: IdFilterArgType | null;
};
export interface UserProvidersDeleteMutationArgs {
    filter?: UserProviderFilterArgType | null;
}
export {};
