"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const consoles_1 = require("../import/consoles");
const services_1 = require("../import/services");
const services_2 = require("../logger/services");
const platformClient_1 = require("../platformClient");
let ImportModule = class ImportModule {
};
ImportModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [platformClient_1.PlatformClientModule],
        providers: [consoles_1.ImportConsole, services_1.ImportService, services_2.Logger],
        exports: [consoles_1.ImportConsole],
        controllers: [],
    })
], ImportModule);
exports.ImportModule = ImportModule;
