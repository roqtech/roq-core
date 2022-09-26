"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestShareInterceptor = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const nestjs_cls_1 = require("nestjs-cls");
const enums_1 = require("../../library/enums");
const uuid_1 = require("uuid");
let RequestShareInterceptor = class RequestShareInterceptor {
    constructor(configService) {
        this.configService = configService;
    }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercept(context, next) {
        var _a, _b, _c, _d;
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const req = ctx.getContext().req;
        if (req) {
            const requestIdHeader = this.configService.get('application.platform.requestIdHeader');
            const requestCallerHeader = this.configService.get('application.platform.requestCallerHeader');
            const authorizationHeader = this.configService.get('application.platform.authorizationHeader');
            const requestId = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a[requestIdHeader]) !== null && _b !== void 0 ? _b : (0, uuid_1.v4)();
            const requestCaller = (_c = req.headers) === null || _c === void 0 ? void 0 : _c[requestCallerHeader];
            const authorization = (_d = req.headers) === null || _d === void 0 ? void 0 : _d[authorizationHeader];
            const cls = nestjs_cls_1.ClsServiceManager.getClsService();
            cls.set(enums_1.ClsKeyEnum.REQUEST_ID, requestId);
            if (authorization) {
                cls.set(enums_1.ClsKeyEnum.USER_TOKEN, authorization);
            }
            if (requestCaller) {
                cls.set(enums_1.ClsKeyEnum.REQUEST_CALLER, requestCaller);
            }
        }
        return next.handle();
    }
};
RequestShareInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService])
], RequestShareInterceptor);
exports.RequestShareInterceptor = RequestShareInterceptor;
