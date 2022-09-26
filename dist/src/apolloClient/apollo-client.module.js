"use strict";
var ApolloClientModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloClientModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const services_1 = require("../apolloClient/services");
const types_1 = require("../apolloClient/types");
let ApolloClientModule = ApolloClientModule_1 = class ApolloClientModule {
    static register(config) {
        return {
            module: ApolloClientModule_1,
            providers: [
                {
                    provide: types_1.ApolloClientConfigType,
                    useValue: config,
                },
            ],
        };
    }
    static registerAsync(options) {
        return {
            module: ApolloClientModule_1,
            imports: options.imports || [],
            providers: [...this.createAsyncProviders(options)],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: types_1.ApolloClientConfigType,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: types_1.ApolloClientConfigType,
            useFactory: async (optionsFactory) => optionsFactory.createApolloClientOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
};
ApolloClientModule = ApolloClientModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [services_1.ApolloClientService, types_1.ApolloClientConfigType, config_1.ConfigService],
        exports: [services_1.ApolloClientService, types_1.ApolloClientConfigType, config_1.ConfigService],
    })
], ApolloClientModule);
exports.ApolloClientModule = ApolloClientModule;
