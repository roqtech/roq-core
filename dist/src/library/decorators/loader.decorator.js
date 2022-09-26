"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const data_loader_interceptor_1 = require("../../library/interceptors/data-loader.interceptor");
exports.Loader = (0, common_1.createParamDecorator)(async (data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
    if (ctx[data_loader_interceptor_1.NEST_LOADER_CONTEXT_KEY] === undefined) {
        throw new common_1.InternalServerErrorException(`
            You should provide interceptor ${data_loader_interceptor_1.DataLoaderInterceptor.name} globally with ${core_1.APP_INTERCEPTOR}
          `);
    }
    return ctx[data_loader_interceptor_1.NEST_LOADER_CONTEXT_KEY].getLoader(data);
});
