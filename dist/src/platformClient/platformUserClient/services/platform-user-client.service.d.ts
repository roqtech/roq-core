import { CheckUserInviteToken, CheckUserRestorePasswordToken, UserCreateMutationArgs, UserInvite, UserInviteAcceptMutationArgs, UserInviteUpdateMutationArgs, UserProviderCreateMutationArgs, UserProvidersDeleteMutationArgs, UserProviderType, UserRefreshTokenCreateMutationArgs, UserRefreshTokenVerifyMutationArgs, UserResetPasswordTokenCreateMutationArgs, UserResponseType, UserTokenResponseType, UserTokensQueryArgs, UserValidateEmailTokenCreateMutationArgs } from '../../../platformClient/platformUserClient/types';
import { PlatformServiceAccountClientService } from '../../../platformClient/services';
export declare class PlatformUserClientService {
    protected readonly platformServiceAccountClientService: PlatformServiceAccountClientService;
    constructor(platformServiceAccountClientService: PlatformServiceAccountClientService);
    createUser(variables: UserCreateMutationArgs): Promise<UserResponseType>;
    getUserProviders(userId: string): Promise<{
        data: UserProviderType[];
    }>;
    createUserValidateEmailToken(variables: UserValidateEmailTokenCreateMutationArgs): Promise<UserTokenResponseType>;
    getUserTokens(variables: UserTokensQueryArgs): Promise<{
        data: UserTokenResponseType[];
    }>;
    deleteUserToken(userId: string): Promise<void>;
    createUserRefreshToken(variables: UserRefreshTokenCreateMutationArgs): Promise<UserTokenResponseType>;
    verifyUserRefreshToken(variables: UserRefreshTokenVerifyMutationArgs): Promise<UserTokenResponseType>;
    checkUserInviteToken(token: string): Promise<CheckUserInviteToken>;
    acceptUserInvite(variables: UserInviteAcceptMutationArgs): Promise<UserInvite>;
    updateUserInvite(variables: UserInviteUpdateMutationArgs): Promise<UserInvite>;
    clearUserRefreshTokens(userId: string): Promise<string[]>;
    rotateRefreshToken(token: string): Promise<UserTokenResponseType>;
    createUserResetPasswordToken(variables: UserResetPasswordTokenCreateMutationArgs): Promise<UserTokenResponseType>;
    getResetPasswordTokens(token: string): Promise<{
        data: UserTokenResponseType[];
    }>;
    checkUserRestorePasswordToken(token: string, type: string): Promise<CheckUserRestorePasswordToken>;
    createUserProvider(variables: UserProviderCreateMutationArgs): Promise<{
        id: any;
    }>;
    getUserProvider(providerIdentifier: string, providerUserIdentifier: string): Promise<{
        data: UserProviderType[];
    }>;
    deleteUserProviders(variables: UserProvidersDeleteMutationArgs): Promise<void>;
}
