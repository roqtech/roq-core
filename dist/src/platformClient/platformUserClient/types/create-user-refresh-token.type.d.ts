export interface UserRefreshTokenCreateMutationArgs {
    userToken: {
        keepLoggedIn?: boolean;
        userId: string;
    };
}
