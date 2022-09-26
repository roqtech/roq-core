interface UserProviderCreateDto {
    optedIn: boolean;
    providerIdentifier: string;
    providerUserIdentifier: string;
    userId?: string | null;
}
export interface UserProviderCreateMutationArgs {
    userProvider: UserProviderCreateDto;
}
export {};
