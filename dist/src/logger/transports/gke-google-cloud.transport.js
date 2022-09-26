"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GkeGoogleCloudTransport = void 0;
const logging_1 = require("@google-cloud/logging");
const Transport = require("winston-transport");
class GkeGoogleCloudTransport extends Transport {
    constructor(opts, googleCloudLoggerOptions) {
        super(opts);
        this.logging = new logging_1.Logging();
        this.googleCloudOpts = googleCloudLoggerOptions;
        this.logger = this.logging.log(googleCloudLoggerOptions.name, { removeCircular: true });
    }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    log(info, callback) {
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
exports.GkeGoogleCloudTransport = GkeGoogleCloudTransport;
