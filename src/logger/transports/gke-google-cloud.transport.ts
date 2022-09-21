import { Log, Logging } from '@google-cloud/logging';
import { GoogleCloudLoggerOptionsInterface } from 'src/logger/interfaces';
import * as Transport from 'winston-transport';

export class GkeGoogleCloudTransport extends Transport {
  private googleCloudOpts: GoogleCloudLoggerOptionsInterface;

  private logging: Logging;

  private logger: Log;

  constructor(opts: Transport.TransportStreamOptions, googleCloudLoggerOptions: GoogleCloudLoggerOptionsInterface) {
    super(opts);
    this.logging = new Logging();
    this.googleCloudOpts = googleCloudLoggerOptions;
    this.logger = this.logging.log(googleCloudLoggerOptions.name, { removeCircular: true });
  }

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(info: any, callback: () => void): void {
    let severity = 'INFO';
    if (info.level === 'error') {
      severity = 'ERROR';
    }
    const resource = {
      type: 'k8s_container',
      labels: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        cluster_name: this.googleCloudOpts.clusterName,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        container_name: this.googleCloudOpts.containerName,
        location: this.googleCloudOpts.location,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        namespace_name: this.googleCloudOpts.namespaceName,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        pod_name: this.googleCloudOpts.podName,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        project_id: this.googleCloudOpts.projectId,
      },
    };
    const entry = this.logger.entry({ severity, resource }, info);
    void this.logger.write(entry);
    callback();
  }
}
