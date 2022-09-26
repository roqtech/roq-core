export interface UserInviteUpdateMutationArgs {
    id: string;
    userInvite: {
        email?: string;
        firstName?: string;
        lastName?: string;
        locale?: string;
        data?: Record<string, unknown>;
        createdByUserId?: string;
        acceptedByUserId?: string;
    };
}
