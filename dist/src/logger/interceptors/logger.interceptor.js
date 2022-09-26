"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@apollo/client/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const nestjs_cls_1 = require("nestjs-cls");
const rxjs_1 = require("rxjs");
const enums_1 = require("../../library/enums");
const enums_2 = require("../../logger/enums");
const services_1 = require("../../logger/services");
const utilities_1 = require("../../logger/utilities");
let LoggerInterceptor = class LoggerInterceptor {
    constructor(logger, configService) {
        this.logger = logger;
        this.configService = configService;
    }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercept(context, next) {
        var _a;
        if (context.getType() === 'graphql') {
            const ctx = graphql_1.GqlExecutionContext.create(context);
            const req = ctx.getContext().req;
            if (((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.operationName) !== 'IntrospectionQuery') {
                const graphql = req.body.query;
                const type = graphql.includes('mutation') ? enums_2.LoggingTypeEnum.incomingMutation : enums_2.LoggingTypeEnum.incomingQuery;
                const operationName = (0, utilities_1.getGqlOperationName)((0, core_1.gql)(graphql));
                this.logger.log({
                    type,
                    request: {
                        operationName,
                        graphql,
                        headers: req.headers,
                        variables: req.body.variables,
                    },
                });
            }
        }
        /*else if (!req.body.query) {
          const type = LoggingTypeEnum.incomingRequest;
          this.logger.log({
            type,
            api: {
              headers: req.headers,
              body: req.body,
              query: req.query,
              url: req.originalUrl,
              method: req.method,
            },
          });
        }*/
        const processResponse = () => {
            if (context.getType() === 'graphql') {
                const ctx = graphql_1.GqlExecutionContext.create(context);
                const res = ctx.getContext().res;
                const cls = nestjs_cls_1.ClsServiceManager.getClsService();
                res.header(this.configService.get('application.platform.requestIdHeader'), cls.get(enums_1.ClsKeyEnum.REQUEST_ID));
            }
        };
        return next.handle().pipe((0, rxjs_1.tap)(processResponse, processResponse));
    }
};
LoggerInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.Logger,
        config_1.ConfigService])
], LoggerInterceptor);
exports.LoggerInterceptor = LoggerInterceptor;
