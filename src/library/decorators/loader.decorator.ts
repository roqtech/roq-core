
import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { DataLoaderInterceptor, NEST_LOADER_CONTEXT_KEY } from 'src/library/interceptors/data-loader.interceptor';

export const Loader = createParamDecorator(
  async (data, context: ExecutionContext & { [key: string]: any }) => {
    const ctx: any = GqlExecutionContext.create(context).getContext();
    if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
      throw new InternalServerErrorException(`
            You should provide interceptor ${DataLoaderInterceptor.name} globally with ${APP_INTERCEPTOR}
          `);
    }
    return ctx[NEST_LOADER_CONTEXT_KEY].getLoader(data);
  },
);
