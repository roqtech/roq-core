import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';
import { ClsKeyEnum } from '../enums';
import { v4 } from 'uuid';

@Injectable()
export class RequestShareInterceptor implements NestInterceptor {
  constructor(private readonly cls: ClsService, private configService: ConfigService) {}

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    if (req) {
      const requestIdHeader = this.configService.get('application.platform.requestIdHeader');
      const requestCallerHeader = this.configService.get('application.platform.requestCallerHeader');
      const authorizationHeader = this.configService.get('application.platform.authorizationHeader');

      const requestId = req.headers?.[requestIdHeader] ?? v4();
      const requestCaller = req.headers?.[requestCallerHeader];
      const authorization = req.headers?.[authorizationHeader];

      this.cls.set(ClsKeyEnum.REQUEST_ID, requestId);
      if (authorization) {
        this.cls.set(ClsKeyEnum.USER_TOKEN, authorization);
      }
      if (requestCaller) {
        this.cls.set(ClsKeyEnum.REQUEST_CALLER, requestCaller);
      }
    }

    return next.handle();
  }
}
