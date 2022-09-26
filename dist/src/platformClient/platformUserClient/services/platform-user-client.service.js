"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformUserClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("../../../platformClient/platformUserClient/graphql");
const services_1 = require("../../../platformClient/services");
let PlatformUserClientService = class PlatformUserClientService {
    constructor(platformServiceAccountClientService) {
        this.platformServiceAccountClientService = platformServiceAccountClientService;
    }
    async createUser(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.createUserMutation,
            variables,
        }, 'createUser');
    }
    async getUserProviders(userId) {
        return this.platformServiceAccountClientService.request({
            query: graphql_1.userProvidersQuery,
            variables: { userId },
        }, 'userProviders');
    }
    async createUserValidateEmailToken(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.createUserValidateEmailTokenMutation,
            variables,
        }, 'createUserValidateEmailToken');
    }
    async getUserTokens(variables) {
        return this.platformServiceAccountClientService.request({
            query: graphql_1.userTokenQuery,
            variables,
        }, 'userTokens');
    }
    async deleteUserToken(userId) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.deleteUserTokensMutation,
            variables: { userId },
        });
    }
    async createUserRefreshToken(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.createUserRefreshTokenMutation,
            variables,
        }, 'createUserRefreshToken');
    }
    async verifyUserRefreshToken(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.verifyUserRefreshTokenMutation,
            variables,
        }, 'verifyUserRefreshToken');
    }
    async checkUserInviteToken(token) {
        return this.platformServiceAccountClientService.request({
            query: graphql_1.checkUserInviteTokenQuery,
            variables: {
                token,
            },
        }, 'checkUserInviteToken');
    }
    async acceptUserInvite(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.acceptUserInvitationMutation,
            variables,
        }, 'acceptUserInvite');
    }
    async updateUserInvite(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.updateUserInviteMutation,
            variables,
        }, 'updateUserInvite');
    }
    async clearUserRefreshTokens(userId) {
        const variables = {
            userId,
        };
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.clearUserRefreshTokensMutation,
            variables,
        }, 'deleteUserTokens');
    }
    async rotateRefreshToken(token) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.rotateRefreshTokenMutation,
            variables: { token },
        }, 'rotateRefreshToken');
    }
    async createUserResetPasswordToken(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.createUserResetPasswordTokenMutation,
            variables,
        }, 'createUserResetPasswordToken');
    }
    async getResetPasswordTokens(token) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.resetPasswordTokenQuery,
            variables: {
                token,
            },
        }, 'userTokens');
    }
    async checkUserRestorePasswordToken(token, type) {
        return this.platformServiceAccountClientService.request({
            query: graphql_1.checkUserRestorePasswordTokenQuery,
            variables: {
                token,
                type,
            },
        }, 'checkUserToken');
    }
    async createUserProvider(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.createUserProviderMutation,
            variables,
        });
    }
    async getUserProvider(providerIdentifier, providerUserIdentifier) {
        return this.platformServiceAccountClientService.request({
            query: graphql_1.userProviderQuery,
            variables: {
                providerIdentifier,
                providerUserIdentifier,
            },
        }, 'userProviders');
    }
    async deleteUserProviders(variables) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.deleteUserProvidersMutation,
            variables,
        });
    }
};
PlatformUserClientService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformServiceAccountClientService])
], PlatformUserClientService);
exports.PlatformUserClientService = PlatformUserClientService;
