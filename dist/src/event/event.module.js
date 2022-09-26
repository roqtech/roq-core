"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const resolvers_1 = require("../event/resolvers");
const services_1 = require("../event/services");
const library_1 = require("../library");
const services_2 = require("../logger/services");
const platformEventClient_1 = require("../platformClient/platformEventClient");
let EventModule = class EventModule {
};
EventModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [library_1.LibraryModule, platformEventClient_1.PlatformEventClientModule],
        providers: [
            resolvers_1.EventResolver,
            services_2.Logger,
            services_1.EventTriggerService,
        ],
        exports: [services_1.EventTriggerService],
        controllers: [],
    })
], EventModule);
exports.EventModule = EventModule;
