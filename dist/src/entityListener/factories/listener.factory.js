"use strict";
var ListenerFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerFactory = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const listener_1 = require("../../entityListener/listener");
const services_1 = require("../../platformClient/platformEventClient/services");
const typeorm_2 = require("typeorm");
let ListenerFactory = ListenerFactory_1 = class ListenerFactory {
    constructor(connection, platformClientEventService, configService) {
        this.connection = connection;
        this.platformClientEventService = platformClientEventService;
        this.configService = configService;
    }
    createListener(entityClass, excludedFields) {
        return new listener_1.FactoryListener(entityClass, entityClass.name, this.connection, this.platformClientEventService, this.configService, excludedFields);
    }
    static generateProviders(entitiesListeners) {
        return entitiesListeners.map((entityListener) => ({
            provide: `${entityListener.entity}Listener`,
            useFactory: (factory) => factory.createListener(entityListener.entity, entityListener.excludedFields),
            inject: [ListenerFactory_1],
        }));
    }
    static generateAsyncProviders(option) {
        return [
            {
                provide: option.name,
                useFactory: option.useFactory,
                inject: option.inject || [],
            },
            {
                provide: option.name + 'Listener',
                useFactory: async (entityListener, factory) => factory.createListener(entityListener.entity, entityListener.excludedFields),
                inject: [option.name, ListenerFactory_1],
            },
        ];
    }
};
ListenerFactory = ListenerFactory_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectConnection)()),
    tslib_1.__param(1, (0, common_1.Inject)(services_1.PlatformEventClientService)),
    tslib_1.__param(2, (0, common_1.Inject)(config_1.ConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Connection,
        services_1.PlatformEventClientService,
        config_1.ConfigService])
], ListenerFactory);
exports.ListenerFactory = ListenerFactory;
