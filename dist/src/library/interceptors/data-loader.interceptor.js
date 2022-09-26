"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLoaderInterceptor = exports.NEST_LOADER_CONTEXT_KEY = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const loaders_1 = require("../../library/loaders");
/**
 * Context key where get loader function will be stored.
 * This class should be added to your module providers like so:
 * {
 *     provide: APP_INTERCEPTOR,
 *     useClass: DataLoaderInterceptor,
 * },
 */
exports.NEST_LOADER_CONTEXT_KEY = 'NEST_LOADER_CONTEXT_KEY';
let DataLoaderInterceptor = class DataLoaderInterceptor {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    /**
     * @inheritdoc
     */
    intercept(context, next) {
        const graphqlExecutionContext = graphql_1.GqlExecutionContext.create(context);
        const ctx = graphqlExecutionContext.getContext();
        if (ctx[exports.NEST_LOADER_CONTEXT_KEY] === undefined) {
            ctx[exports.NEST_LOADER_CONTEXT_KEY] = {
                contextId: core_1.ContextIdFactory.create(),
                getLoader: (type, repositoryType, relationProperty) => {
                    const key = [type.name, repositoryType === null || repositoryType === void 0 ? void 0 : repositoryType.name, relationProperty].filter(Boolean).join('-');
                    if (ctx[key] === undefined) {
                        try {
                            if (type === loaders_1.BaseMultipleEntityLoader) {
                                ctx[key] = (async () => (await this.moduleRef.resolve(loaders_1.BaseMultipleEntityLoader, ctx[exports.NEST_LOADER_CONTEXT_KEY].contextId, { strict: false })).generateDataLoader(await this.moduleRef.resolve(repositoryType, ctx[exports.NEST_LOADER_CONTEXT_KEY].contextId, { strict: false }), relationProperty))();
                            }
                            else if (type === loaders_1.BaseSingleEntityLoader) {
                                ctx[key] = (async () => (await this.moduleRef.resolve(loaders_1.BaseSingleEntityLoader, ctx[exports.NEST_LOADER_CONTEXT_KEY].contextId, { strict: false })).generateDataLoader(await this.moduleRef.resolve(repositoryType, ctx[exports.NEST_LOADER_CONTEXT_KEY].contextId, { strict: false })))();
                            }
                            else {
                                ctx[key] = (async () => (await this.moduleRef.resolve(type, ctx[exports.NEST_LOADER_CONTEXT_KEY].contextId, { strict: false })).generateDataLoader())();
                            }
                        }
                        catch (e) {
                            throw new common_1.InternalServerErrorException(`The loader ${type} is not provided` + e);
                        }
                    }
                    return ctx[key];
                },
            };
        }
        return next.handle();
    }
};
DataLoaderInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [core_1.ModuleRef])
], DataLoaderInterceptor);
exports.DataLoaderInterceptor = DataLoaderInterceptor;
