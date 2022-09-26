"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformHttpClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let PlatformHttpClientService = class PlatformHttpClientService {
    constructor(configService) {
        this.configService = configService;
        const base64encodedData = Buffer.from(`${configService.get('application.platform.tenantId')}:${configService.get('application.platform.apiKey')}`).toString('base64');
        this.http = axios_1.default.create({
            baseURL: configService.get('application.platform.url'),
            headers: { [configService.get('application.platform.authorizationHeader')]: `Basic ${base64encodedData}` },
        });
    }
    async getAccessToken(roqIdentifier) {
        const response = await this.http.post('/authorize', {
            tenantId: this.configService.get('application.platform.tenantId'),
            apiKey: this.configService.get('application.platform.apiKey'),
            roqIdentifier
        }).catch(err => {
            var _a, _b;
            throw new common_1.BadGatewayException((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        });
        return response.data.accessToken;
    }
    async getServiceAccountAccessToken(email) {
        const response = await this.http.post('/authorize/serviceAccount', {
            tenantId: this.configService.get('application.platform.tenantId'),
            apiKey: this.configService.get('application.platform.apiKey'),
            email
        }).catch(err => {
            var _a, _b;
            throw new common_1.BadGatewayException((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        });
        return response.data.accessToken;
    }
};
PlatformHttpClientService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService])
], PlatformHttpClientService);
exports.PlatformHttpClientService = PlatformHttpClientService;
