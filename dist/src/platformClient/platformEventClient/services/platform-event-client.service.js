"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformEventClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mutation_1 = require("../../../platformClient/platformEventClient/graphql/mutation");
const services_1 = require("../../../platformClient/services");
let PlatformEventClientService = class PlatformEventClientService {
    constructor(platformServiceAccountClientService) {
        this.platformServiceAccountClientService = platformServiceAccountClientService;
    }
    async trigger(event) {
        return this.platformServiceAccountClientService.request({
            mutation: mutation_1.triggerEventMutation,
            variables: {
                event,
            },
        }, 'triggerEvent');
    }
};
PlatformEventClientService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformServiceAccountClientService])
], PlatformEventClientService);
exports.PlatformEventClientService = PlatformEventClientService;
