"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleLoader = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const interceptors_1 = require("../../library/interceptors");
const data_loader_interceptor_1 = require("../interceptors/data-loader.interceptor");
const loaders_1 = require("../loaders");
exports.SingleLoader = (0, common_1.createParamDecorator)(async (type, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
    if (ctx[data_loader_interceptor_1.NEST_LOADER_CONTEXT_KEY] === undefined) {
        throw new common_1.InternalServerErrorException(`
            You should provide interceptor ${interceptors_1.DataLoaderInterceptor.name} globally with ${core_1.APP_INTERCEPTOR}
          `);
    }
    return ctx[data_loader_interceptor_1.NEST_LOADER_CONTEXT_KEY].getLoader(loaders_1.BaseSingleEntityLoader, type);
});
