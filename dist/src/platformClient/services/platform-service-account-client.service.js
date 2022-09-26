"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformServiceAccountClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cache_manager_1 = require("cache-manager");
const jsonwebtoken_1 = require("jsonwebtoken");
const nestjs_cls_1 = require("nestjs-cls");
const types_1 = require("../../apolloClient/types");
const enums_1 = require("../../library/enums");
const services_1 = require("../../logger/services");
const platform_client_service_1 = require("../../platformClient/services/platform-client.service");
const platform_http_client_service_1 = require("../../platformClient/services/platform-http-client.service");
const uuid_1 = require("uuid");
let PlatformServiceAccountClientService = class PlatformServiceAccountClientService extends platform_client_service_1.PlatformClientService {
    constructor(config, configService, logger, cls, platformHttpClientService, cacheManager) {
        super(config, configService, logger, cls);
        this.config = config;
        this.configService = configService;
        this.logger = logger;
        this.cls = cls;
        this.platformHttpClientService = platformHttpClientService;
        this.cacheManager = cacheManager;
    }
    async setHeaders(headers) {
        var _a;
        const requestId = (_a = this.cls.get(enums_1.ClsKeyEnum.REQUEST_ID)) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
        const requestCaller = this.configService.get('application.appName');
        headers[this.configService.get('application.platform.requestIdHeader')] = requestId;
        headers[this.configService.get('application.platform.requestCallerHeader')] = requestCaller;
        const tokenCacheKey = this.configService.get('application.serviceAccount.cache.key');
        let isTokenValid = false;
        let token = await this.cacheManager.get(tokenCacheKey);
        if (token) {
            try {
                const payload = (0, jsonwebtoken_1.decode)(token);
                isTokenValid = payload.exp !== undefined && payload.exp * 1000 > Date.now();
            }
            catch (err) {
                isTokenValid = false;
            }
        }
        if (!isTokenValid) {
            token = await this.platformHttpClientService.getServiceAccountAccessToken(this.configService.get('application.serviceAccount.email'));
            await this.cacheManager.set(tokenCacheKey, token);
        }
        headers[this.configService.get('application.platform.authorizationHeader')] = `Bearer ${token}`;
    }
};
PlatformServiceAccountClientService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(5, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [types_1.ApolloClientConfigType,
        config_1.ConfigService,
        services_1.Logger,
        nestjs_cls_1.ClsService,
        platform_http_client_service_1.PlatformHttpClientService, typeof (_a = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _a : Object])
], PlatformServiceAccountClientService);
exports.PlatformServiceAccountClientService = PlatformServiceAccountClientService;
