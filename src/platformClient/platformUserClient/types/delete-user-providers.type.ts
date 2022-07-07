import { BooleanFilterArgType, IdFilterArgType, StringFilterArgType } from '../../types';

type UserProviderFilterArgType = {
  id?: IdFilterArgType | null;
  optedIn?: BooleanFilterArgType | null;
  providerIdentifier?: StringFilterArgType | null;
  providerUserIdentifier?: StringFilterArgType | null;
  userId?: IdFilterArgType | null;
};

export interface UserProvidersDeleteMutationArgs {
  filter?: UserProviderFilterArgType | null;
}
