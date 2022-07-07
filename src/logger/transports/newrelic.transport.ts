import { Logform } from 'winston';
import * as Transport from 'winston-transport';

export class NewrelicTransport extends Transport {

  constructor(opts: Transport.TransportStreamOptions) {
    super(opts);
  }

  log(info: Logform.TransformableInfo, callback: () => void): void {
    if (info.newrelic) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
      const newrelic = require('newrelic');
      newrelic.noticeError(info.error, {
        context: info.context,
        message: info.message,
        type: info.type,
        request: info.request,
        response: info.response,
        requestId: info.requestId,
        caller: info.caller,
        service: info.service,
        environment: info.environment,
        api: info.api,
        project: info.project,
      });
    }

    callback();
  }
}
