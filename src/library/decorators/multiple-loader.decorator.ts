import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

import { DataLoaderInterceptor } from '../interceptors';
import { NEST_LOADER_CONTEXT_KEY } from '../interceptors/data-loader.interceptor';
import { BaseMultipleEntityLoader } from '../loaders';
import { BaseRepository } from '../repositories';

export const MultipleLoader = createParamDecorator<{ repository: typeof BaseRepository<any>; relationProperty: string}>(
  async (param, context: ExecutionContext & { [key: string]: any }) => {
    const ctx: any = GqlExecutionContext.create(context).getContext();
    if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
      throw new InternalServerErrorException(`
          You should provide interceptor ${DataLoaderInterceptor.name} globally with ${APP_INTERCEPTOR}
        `);
    }
    return ctx[NEST_LOADER_CONTEXT_KEY]
      .getLoader(BaseMultipleEntityLoader, param.repository, param.relationProperty);
  },
);
