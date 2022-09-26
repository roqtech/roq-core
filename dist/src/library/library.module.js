"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const pipes_1 = require("../library/pipes");
const scalars_1 = require("../library/scalars");
const services_1 = require("../library/services");
let LibraryModule = class LibraryModule {
};
LibraryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [services_1.UtilityService, scalars_1.JsonObjectScalar, scalars_1.DateScalar, pipes_1.ParseUUIDStringPipe],
        exports: [services_1.UtilityService],
        controllers: [],
    })
], LibraryModule);
exports.LibraryModule = LibraryModule;
