"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformMailClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mutations_1 = require("../../../platformClient/platformMailClient/mutations");
const services_1 = require("../../../platformClient/services");
let PlatformMailClientService = class PlatformMailClientService {
    constructor(platformServiceAccountClientService) {
        this.platformServiceAccountClientService = platformServiceAccountClientService;
    }
    async sendMail(payload) {
        return this.platformServiceAccountClientService.request({
            mutation: mutations_1.sendMailMutation,
            variables: {
                payload,
            },
        }, 'sendMail');
    }
};
PlatformMailClientService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformServiceAccountClientService])
], PlatformMailClientService);
exports.PlatformMailClientService = PlatformMailClientService;
