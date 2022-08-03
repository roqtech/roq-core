import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import DataLoader from 'dataloader';
import { Observable } from 'rxjs';
import { NestDataLoader } from 'src/library/interfaces';
import { BaseMultipleEntityLoader, BaseSingleEntityLoader } from 'src/library/loaders';
import { BaseRepository } from 'src/library/repositories';

/**
 * Context key where get loader function will be stored.
 * This class should be added to your module providers like so:
 * {
 *     provide: APP_INTERCEPTOR,
 *     useClass: DataLoaderInterceptor,
 * },
 */
export const NEST_LOADER_CONTEXT_KEY = 'NEST_LOADER_CONTEXT_KEY';

@Injectable()
export class DataLoaderInterceptor implements NestInterceptor {
  constructor(private readonly moduleRef: ModuleRef) {}
  /**
   * @inheritdoc
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();

    if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
      ctx[NEST_LOADER_CONTEXT_KEY] = {
        contextId: ContextIdFactory.create(),
        getLoader: (
          type: typeof BaseMultipleEntityLoader<unknown> |
          typeof BaseSingleEntityLoader<unknown>,
          repositoryType: typeof BaseRepository<unknown>,
          relationProperty: string
        ): Promise<DataLoader<unknown, unknown>> => {
          const key = [type.name, repositoryType?.name, relationProperty].filter(Boolean).join('-');
          if (ctx[key] === undefined) {
            try {
              if(type === BaseMultipleEntityLoader) {
                ctx[key] = (async () => (
                  await this.moduleRef.resolve(
                    BaseMultipleEntityLoader,
                    ctx[NEST_LOADER_CONTEXT_KEY].contextId,
                    { strict: false },
                  )
                ).generateDataLoader(
                  await this.moduleRef.resolve(
                    repositoryType, ctx[NEST_LOADER_CONTEXT_KEY].contextId, { strict: false }),
                  relationProperty))();
              } else if(type === BaseSingleEntityLoader) {
                ctx[key] = (async () => (
                  await this.moduleRef.resolve(
                    BaseSingleEntityLoader,
                    ctx[NEST_LOADER_CONTEXT_KEY].contextId,
                    { strict: false },
                  )
                ).generateDataLoader(
                  await this.moduleRef.resolve(
                    repositoryType, ctx[NEST_LOADER_CONTEXT_KEY].contextId, { strict: false })
                ))();
              } else {
                ctx[key] = (async () => (
                  await this.moduleRef.resolve<NestDataLoader<any, any>>(
                    type,
                    ctx[NEST_LOADER_CONTEXT_KEY].contextId,
                    { strict: false },
                  )
                ).generateDataLoader())();
              }
            } catch (e) {
              throw new InternalServerErrorException(
                `The loader ${type} is not provided` + e,
              );
            }
          }
          return ctx[key];
        },
      };
    }
    return next.handle();
  }
}
