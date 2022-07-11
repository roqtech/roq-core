import { Injectable } from '@nestjs/common';
import { UserTokenTypeEnum } from 'src/platformClient/platformUserClient/enums';
import {
  acceptUserInvitationMutation,
  checkUserInviteTokenQuery,
  checkUserRestorePasswordTokenQuery,
  clearUserRefreshTokensMutation,
  createUserMutation,
  createUserProviderMutation,
  createUserRefreshTokenMutation,
  createUserResetPasswordTokenMutation,
  createUserValidateEmailTokenMutation,
  deleteUserProvidersMutation,
  deleteUserTokensMutation,
  resetPasswordTokenQuery,
  rotateRefreshTokenMutation,
  updateUserInviteMutation,
  userProviderQuery,
  userProvidersQuery,
  userTokenQuery,
  verifyUserRefreshTokenMutation,
} from 'src/platformClient/platformUserClient/graphql';
import {
  CheckUserInviteToken,
  CheckUserRestorePasswordToken,
  UserCreateMutationArgs,
  UserInvite,
  UserInviteAcceptMutationArgs,
  UserInviteUpdateMutationArgs,
  UserProviderCreateMutationArgs,
  UserProvidersDeleteMutationArgs,
  UserProviderType,
  UserRefreshTokenCreateMutationArgs,
  UserRefreshTokenVerifyMutationArgs,
  UserResetPasswordTokenCreateMutationArgs,
  UserResponseType,
  UserTokenResponseType,
  UserTokensQueryArgs,
  UserValidateEmailTokenCreateMutationArgs,
} from 'src/platformClient/platformUserClient/types';
import { PlatformServiceAccountClientService } from 'src/platformClient/services';

@Injectable()
export class PlatformUserClientService {
  constructor(
    private readonly platformServiceAccountClientService: PlatformServiceAccountClientService
    ) {}

  async createUser(variables: UserCreateMutationArgs): Promise<UserResponseType> {
    return this.platformServiceAccountClientService.request<UserResponseType>(
      {
        mutation: createUserMutation,
        variables,
      },
      'createUser',
    );
  }

  async getUserProviders(userId: string): Promise<{ data: UserProviderType[] }> {
    return this.platformServiceAccountClientService.request<{ data: UserProviderType[] }>(
      {
        query: userProvidersQuery,
        variables: { userId },
      },
      'userProviders',
    );
  }

  async createUserValidateEmailToken(
    variables: UserValidateEmailTokenCreateMutationArgs,
  ): Promise<UserTokenResponseType> {
    return this.platformServiceAccountClientService.request<UserTokenResponseType>(
      {
        mutation: createUserValidateEmailTokenMutation,
        variables,
      },
      'createUserValidateEmailToken',
    );
  }

  async getUserTokens(variables: UserTokensQueryArgs): Promise<{ data: UserTokenResponseType[] }> {
    return this.platformServiceAccountClientService.request<{ data: UserTokenResponseType[] }>(
      {
        query: userTokenQuery,
        variables,
      },
      'userTokens',
    );
  }

  async deleteUserToken(userId: string): Promise<void> {
    return this.platformServiceAccountClientService.request<void>({
      mutation: deleteUserTokensMutation,
      variables: { userId },
    });
  }

  async createUserRefreshToken(variables: UserRefreshTokenCreateMutationArgs): Promise<UserTokenResponseType> {
    return this.platformServiceAccountClientService.request<UserTokenResponseType>(
      {
        mutation: createUserRefreshTokenMutation,
        variables,
      },
      'createUserRefreshToken',
    );
  }

  async verifyUserRefreshToken(variables: UserRefreshTokenVerifyMutationArgs): Promise<UserTokenResponseType> {
    return this.platformServiceAccountClientService.request<UserTokenResponseType>(
      {
        mutation: verifyUserRefreshTokenMutation,
        variables,
      },
      'verifyUserRefreshToken',
    );
  }

  async checkUserInviteToken(token: string): Promise<CheckUserInviteToken> {
    return this.platformServiceAccountClientService.request<CheckUserInviteToken>(
      {
        query: checkUserInviteTokenQuery,
        variables: {
          token,
        },
      },
      'checkUserInviteToken',
    );
  }

  async acceptUserInvite(variables: UserInviteAcceptMutationArgs): Promise<UserInvite> {
    return this.platformServiceAccountClientService.request<UserInvite>(
      {
        mutation: acceptUserInvitationMutation,
        variables,
      },
      'acceptUserInvite',
    );
  }

  async updateUserInvite(variables: UserInviteUpdateMutationArgs): Promise<UserInvite> {
    return this.platformServiceAccountClientService.request<UserInvite>(
      {
        mutation: updateUserInviteMutation,
        variables,
      },
      'updateUserInvite',
    );
  }

  async clearUserRefreshTokens(userId: string): Promise<string[]> {
    const variables = {
      userId,
      type: UserTokenTypeEnum.REFRESH,
    };

    return this.platformServiceAccountClientService.request<string[]>(
      {
        mutation: clearUserRefreshTokensMutation,
        variables,
      },
      'deleteUserTokens',
    );
  }

  async rotateRefreshToken(token: string): Promise<UserTokenResponseType> {
    return this.platformServiceAccountClientService.request<UserTokenResponseType>(
      {
        mutation: rotateRefreshTokenMutation,
        variables: { token },
      },
      'rotateRefreshToken',
    );
  }

  async createUserResetPasswordToken(
    variables: UserResetPasswordTokenCreateMutationArgs,
  ): Promise<UserTokenResponseType> {
    return this.platformServiceAccountClientService.request<UserTokenResponseType>(
      {
        mutation: createUserResetPasswordTokenMutation,
        variables,
      },
      'createUserResetPasswordToken',
    );
  }

  async getResetPasswordTokens(token: string): Promise<{ data: UserTokenResponseType[] }> {
    return this.platformServiceAccountClientService.request<{ data: UserTokenResponseType[] }>(
      {
        mutation: resetPasswordTokenQuery,
        variables: {
          token,
        },
      },
      'userTokens',
    );
  }

  async checkUserRestorePasswordToken(token: string, type: string): Promise<CheckUserRestorePasswordToken> {
    return this.platformServiceAccountClientService.request<CheckUserRestorePasswordToken>(
      {
        query: checkUserRestorePasswordTokenQuery,
        variables: {
          token,
          type,
        },
      },
      'checkUserToken',
    );
  }

  async createUserProvider(variables: UserProviderCreateMutationArgs): Promise<{ id }> {
    return this.platformServiceAccountClientService.request({
      mutation: createUserProviderMutation,
      variables,
    });
  }

  async getUserProvider(
    providerIdentifier: string,
    providerUserIdentifier: string,
  ): Promise<{ data: UserProviderType[] }> {
    return this.platformServiceAccountClientService.request<{ data: UserProviderType[] }>(
      {
        query: userProviderQuery,
        variables: {
          providerIdentifier,
          providerUserIdentifier,
        },
      },
      'userProviders',
    );
  }

  async deleteUserProviders(variables: UserProvidersDeleteMutationArgs): Promise<void> {
    return this.platformServiceAccountClientService.request({
      mutation: deleteUserProvidersMutation,
      variables,
    });
  }
}
