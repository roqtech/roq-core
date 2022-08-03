import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { DataLoaderInterceptor } from 'src/library/interceptors';

import { NEST_LOADER_CONTEXT_KEY } from '../interceptors/data-loader.interceptor';
import { BaseSingleEntityLoader } from '../loaders';
import { BaseRepository } from '../repositories';

export const SingleLoader = createParamDecorator<typeof BaseRepository<any>>(
  async (type, context: ExecutionContext & { [key: string]: any }) => {
    const ctx: any = GqlExecutionContext.create(context).getContext();
    if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
      throw new InternalServerErrorException(`
            You should provide interceptor ${DataLoaderInterceptor.name} globally with ${APP_INTERCEPTOR}
          `);
    }
    return ctx[NEST_LOADER_CONTEXT_KEY].getLoader(BaseSingleEntityLoader, type);
  },
);
