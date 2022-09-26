"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformClientModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const apolloClient_1 = require("../apolloClient");
const services_1 = require("../logger/services");
const services_2 = require("../platformClient/services");
let PlatformClientModule = class PlatformClientModule {
};
PlatformClientModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            apolloClient_1.ApolloClientModule.registerAsync({
                useFactory: (configService) => ({
                    host: configService.get('application.platform.graphqlUri'),
                    headers: {},
                }),
                imports: [],
                inject: [config_1.ConfigService],
            }),
            common_1.CacheModule.register({
                useFactory: async (configService) => ({
                    ttl: configService.get('application.serviceAccount.cache.ttl'),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [
            services_2.PlatformClientService,
            services_2.PlatformHttpClientService,
            services_1.Logger,
            services_2.PlatformServiceAccountClientService,
        ],
        exports: [services_2.PlatformClientService, services_2.PlatformHttpClientService, services_2.PlatformServiceAccountClientService],
        controllers: [],
    })
], PlatformClientModule);
exports.PlatformClientModule = PlatformClientModule;
