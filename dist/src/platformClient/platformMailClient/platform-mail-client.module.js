"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformMailClientModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const platformClient_1 = require("../../platformClient");
const services_1 = require("../../platformClient/platformMailClient/services");
let PlatformMailClientModule = class PlatformMailClientModule {
};
PlatformMailClientModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [platformClient_1.PlatformClientModule],
        providers: [services_1.PlatformMailClientService],
        exports: [services_1.PlatformMailClientService],
    })
], PlatformMailClientModule);
exports.PlatformMailClientModule = PlatformMailClientModule;
