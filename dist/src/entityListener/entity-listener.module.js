"use strict";
var EntityListenerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityListenerModule = void 0;
const tslib_1 = require("tslib");
// eslint-disable-next-line @roq/filename-suffix-mismatch
const common_1 = require("@nestjs/common");
const factories_1 = require("../entityListener/factories");
const event_1 = require("../event");
const platformEventClient_1 = require("../platformClient/platformEventClient");
let EntityListenerModule = EntityListenerModule_1 = class EntityListenerModule {
    static register(entitiesListeners) {
        const listeners = factories_1.ListenerFactory.generateProviders(entitiesListeners);
        return {
            module: EntityListenerModule_1,
            providers: [...listeners],
            exports: [...listeners],
        };
    }
    static registerAsync(options) {
        const listeners = [];
        for (const option of options) {
            listeners.push(...factories_1.ListenerFactory.generateAsyncProviders(option));
        }
        return {
            module: EntityListenerModule_1,
            providers: [...listeners],
            exports: [...listeners],
        };
    }
};
EntityListenerModule = EntityListenerModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [event_1.EventModule, platformEventClient_1.PlatformEventClientModule],
        providers: [factories_1.ListenerFactory],
        exports: [factories_1.ListenerFactory],
    })
], EntityListenerModule);
exports.EntityListenerModule = EntityListenerModule;
