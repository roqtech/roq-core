import { ArgumentsHost, Catch, HttpServer } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { LoggingTypeEnum } from 'src/logger/enums';
import { Logger } from 'src/logger/services';

@Catch()
export class LoggerExceptionFilter extends BaseExceptionFilter {
  constructor(private logger: Logger, applicationRef?: HttpServer) {
    super(applicationRef);
  }
  catch(exception: unknown, host: ArgumentsHost): void {
    if (exception instanceof Error) {
      const gqlHost = GqlArgumentsHost.create(host);
      const gqlContext = gqlHost.getContext();
      const gqlReq = gqlContext.req;
      if (gqlReq) {
        this.logger.error(
          {
            message: exception.message,
            type: LoggingTypeEnum.error,
            stack: exception.stack,
          },
          exception.stack,
        );
      } else {
        super.catch(exception, host);
      }
    }
  }
}
