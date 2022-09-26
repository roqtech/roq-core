"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const dtos_1 = require("../../event/dtos");
const services_1 = require("../../platformClient/platformEventClient/services");
let EventResolver = class EventResolver {
    constructor(platformEventClientService) {
        this.platformEventClientService = platformEventClientService;
    }
    triggerEvent(event) {
        return this.platformEventClientService.trigger(event);
    }
};
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => String),
    tslib_1.__param(0, (0, graphql_1.Args)({ name: 'event', type: () => dtos_1.EventCreateDto })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dtos_1.EventCreateDto]),
    tslib_1.__metadata("design:returntype", Promise)
], EventResolver.prototype, "triggerEvent", null);
EventResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformEventClientService])
], EventResolver);
exports.EventResolver = EventResolver;
