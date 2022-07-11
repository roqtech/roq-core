import { BooleanFilterArgType, IdFilterArgType, StringFilterArgType } from 'src/platformClient/types';

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
