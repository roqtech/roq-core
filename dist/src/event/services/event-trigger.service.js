"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTriggerService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const services_1 = require("../../platformClient/platformEventClient/services");
let EventTriggerService = class EventTriggerService {
    constructor(platformEventClientService) {
        this.platformEventClientService = platformEventClientService;
    }
    trigger(event) {
        return this.platformEventClientService.trigger(event);
    }
};
EventTriggerService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformEventClientService])
], EventTriggerService);
exports.EventTriggerService = EventTriggerService;
