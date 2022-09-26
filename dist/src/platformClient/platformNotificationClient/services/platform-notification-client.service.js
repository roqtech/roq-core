"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformNotificationClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("../../../platformClient/platformNotificationClient/graphql");
const services_1 = require("../../../platformClient/services");
let PlatformNotificationClientService = class PlatformNotificationClientService {
    constructor(platformServiceAccountClientService) {
        this.platformServiceAccountClientService = platformServiceAccountClientService;
    }
    async createNotification(notificationData) {
        return this.platformServiceAccountClientService.request({
            mutation: graphql_1.createNotificationMutation,
            variables: {
                notificationData,
            },
        }, 'createNotification');
    }
};
PlatformNotificationClientService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformServiceAccountClientService])
], PlatformNotificationClientService);
exports.PlatformNotificationClientService = PlatformNotificationClientService;
