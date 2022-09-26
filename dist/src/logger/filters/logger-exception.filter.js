"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerExceptionFilter = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../../logger/enums");
const services_1 = require("../../logger/services");
let LoggerExceptionFilter = class LoggerExceptionFilter extends core_1.BaseExceptionFilter {
    constructor(logger, applicationRef) {
        super(applicationRef);
        this.logger = logger;
    }
    catch(exception, host) {
        if (exception instanceof Error) {
            const gqlHost = graphql_1.GqlArgumentsHost.create(host);
            const gqlContext = gqlHost.getContext();
            const gqlReq = gqlContext.req;
            if (gqlReq) {
                this.logger.error({
                    message: exception.message,
                    type: enums_1.LoggingTypeEnum.error,
                    stack: exception.stack,
                }, exception.stack);
            }
            else {
                super.catch(exception, host);
            }
        }
    }
};
LoggerExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(),
    tslib_1.__metadata("design:paramtypes", [services_1.Logger, Object])
], LoggerExceptionFilter);
exports.LoggerExceptionFilter = LoggerExceptionFilter;
