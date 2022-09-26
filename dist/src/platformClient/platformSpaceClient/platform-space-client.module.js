"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformSpaceClientModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const services_1 = require("../../logger/services");
const platformClient_1 = require("../../platformClient");
const services_2 = require("../../platformClient/platformSpaceClient/services");
let PlatformSpaceClientModule = class PlatformSpaceClientModule {
};
PlatformSpaceClientModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [platformClient_1.PlatformClientModule],
        providers: [services_2.PlatformSpaceClientService, services_1.Logger],
        exports: [services_2.PlatformSpaceClientService],
    })
], PlatformSpaceClientModule);
exports.PlatformSpaceClientModule = PlatformSpaceClientModule;
