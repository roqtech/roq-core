"use strict";
var PlatformClientService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const printer_1 = require("graphql/language/printer");
const nestjs_cls_1 = require("nestjs-cls");
const services_1 = require("../../apolloClient/services");
const types_1 = require("../../apolloClient/types");
const enums_1 = require("../../library/enums");
const enums_2 = require("../../logger/enums");
const services_2 = require("../../logger/services");
const utilities_1 = require("../../logger/utilities");
const uuid_1 = require("uuid");
let PlatformClientService = PlatformClientService_1 = class PlatformClientService extends services_1.ApolloClientService {
    constructor(config, configService, logger, cls) {
        super(config, configService);
        this.config = config;
        this.configService = configService;
        this.logger = logger;
        this.cls = cls;
    }
    static parseException(e, exceptionMapping = PlatformClientService_1.exceptionMapping) {
        var _a;
        const error = ((_a = e === null || e === void 0 ? void 0 : e.graphQLErrors) === null || _a === void 0 ? void 0 : _a[0]) || e;
        if (!(error === null || error === void 0 ? void 0 : error.extensions)) {
            return e;
        }
        const { response } = error.extensions;
        const { errorCode } = response;
        const ExceptionClass = exceptionMapping[errorCode];
        if (!ExceptionClass) {
            throw e;
        }
        return new ExceptionClass(response);
    }
    async setHeaders(headers = {}) {
        var _a;
        const requestId = (_a = this.cls.get(enums_1.ClsKeyEnum.REQUEST_ID)) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
        const userToken = this.cls.get(enums_1.ClsKeyEnum.USER_TOKEN);
        const requestCaller = this.configService.get('application.appName');
        headers[this.configService.get('application.platform.requestIdHeader')] = requestId;
        headers[this.configService.get('application.platform.requestCallerHeader')] = requestCaller;
        if (userToken) {
            headers[this.configService.get('application.platform.authorizationHeader')] = userToken;
        }
    }
    async request(request, responseKey, headers = {}) {
        await this.setHeaders(headers);
        let requestLogType;
        let responseLogType;
        let errorResponseLogType;
        const isMutation = 'mutation' in request;
        if (isMutation) {
            requestLogType = enums_2.LoggingTypeEnum.outgoingMutation;
            responseLogType = enums_2.LoggingTypeEnum.outgoingMutationResponse;
            errorResponseLogType = enums_2.LoggingTypeEnum.outgoingMutationError;
        }
        else {
            requestLogType = enums_2.LoggingTypeEnum.outgoingQuery;
            responseLogType = enums_2.LoggingTypeEnum.outgoingQueryResponse;
            errorResponseLogType = enums_2.LoggingTypeEnum.outgoingQueryError;
        }
        const operationName = (0, utilities_1.getGqlOperationName)(isMutation ? request.mutation : request.query);
        const loggingRequest = {
            graphql: (0, printer_1.print)(isMutation ? request.mutation : request.query),
            variables: request.variables,
            operationName,
            url: this.uri,
            headers,
        };
        try {
            this.logger.log({
                type: requestLogType,
                request: loggingRequest,
            });
            const response = await super.request(request, responseKey, headers);
            this.logger.log({
                request: loggingRequest,
                response: {
                    data: response,
                },
                type: responseLogType,
            });
            return response;
        }
        catch (error) {
            this.logger.error({
                request: loggingRequest,
                response: {
                    data: error,
                },
                type: errorResponseLogType,
            });
            throw PlatformClientService_1.parseException(error);
        }
    }
};
PlatformClientService.exceptionMapping = {
    [enums_1.ErrorCodeEnum.FORBIDDEN]: common_1.ForbiddenException,
    [enums_1.ErrorCodeEnum.UNAUTHORIZED_EXCEPTION]: common_1.UnauthorizedException,
};
PlatformClientService = PlatformClientService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [types_1.ApolloClientConfigType,
        config_1.ConfigService,
        services_2.Logger,
        nestjs_cls_1.ClsService])
], PlatformClientService);
exports.PlatformClientService = PlatformClientService;
