"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformNotificationClientModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const platformClient_1 = require("../../platformClient");
const services_1 = require("../../platformClient/platformNotificationClient/services");
let PlatformNotificationClientModule = class PlatformNotificationClientModule {
};
PlatformNotificationClientModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [platformClient_1.PlatformClientModule],
        providers: [services_1.PlatformNotificationClientService],
        exports: [services_1.PlatformNotificationClientService],
    })
], PlatformNotificationClientModule);
exports.PlatformNotificationClientModule = PlatformNotificationClientModule;
