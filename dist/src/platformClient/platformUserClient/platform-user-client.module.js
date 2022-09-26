"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformUserClientModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const services_1 = require("../../logger/services");
const platformClient_1 = require("../../platformClient");
const services_2 = require("../../platformClient/platformUserClient/services");
let PlatformUserClientModule = class PlatformUserClientModule {
};
PlatformUserClientModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [platformClient_1.PlatformClientModule],
        providers: [services_2.PlatformUserClientService, services_1.Logger],
        exports: [services_2.PlatformUserClientService],
    })
], PlatformUserClientModule);
exports.PlatformUserClientModule = PlatformUserClientModule;
