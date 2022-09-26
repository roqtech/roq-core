"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
const nest_winston_1 = require("nest-winston");
const nestjs_cls_1 = require("nestjs-cls");
const formats_1 = require("../../logger/formats");
const transports_1 = require("../../logger/transports");
const winston = require("winston");
function createLogger(configService, additionalTransports = []) {
    const cls = nestjs_cls_1.ClsServiceManager.getClsService();
    const formats = [(0, formats_1.initialFormat)(configService, cls), (0, formats_1.skipFieldsFormat)(configService), (0, formats_1.messageFormat)()];
    const format = winston.format.combine(...formats);
    const transports = [];
    const consoleLogs = configService.get('application.consoleLogs');
    const cloudLogs = configService.get('application.cloudLogs');
    const fileLogs = configService.get('application.fileLogs');
    const newrelic = configService.get('application.newrelic');
    const k8sName = configService.get('application.kubernetes.clusterName');
    if (consoleLogs && cloudLogs && k8sName) {
        const options = {
            name: configService.get('application.cloudLogsName'),
            containerName: configService.get('application.kubernetes.containerName'),
            clusterName: configService.get('application.kubernetes.clusterName'),
            location: configService.get('application.kubernetes.location'),
            namespaceName: configService.get('application.kubernetes.namespaceName'),
            podName: configService.get('application.kubernetes.podName'),
            projectId: configService.get('application.kubernetes.projectId'),
        };
        transports.push(new transports_1.GkeGoogleCloudTransport({}, options));
    }
    else if (consoleLogs && cloudLogs) {
        transports.push(new transports_1.GoogleCloudTransport({}, configService.get('application.cloudLogsName')));
    }
    else if (consoleLogs) {
        transports.push(new winston.transports.Console({ format: winston.format.json() }));
    }
    if (fileLogs) {
        transports.push(new winston.transports.File({ filename: 'combined.log' }));
    }
    if (newrelic) {
        transports.push(new transports_1.NewrelicTransport({}));
    }
    const mergedTransports = additionalTransports.reduce((acc, curr) => {
        const filteredTransports = acc.filter((transport) => { var _a, _b; return ((_a = transport === null || transport === void 0 ? void 0 : transport.constructor) === null || _a === void 0 ? void 0 : _a.name) !== ((_b = curr === null || curr === void 0 ? void 0 : curr.constructor) === null || _b === void 0 ? void 0 : _b.name); });
        return [...filteredTransports, curr];
    }, transports);
    return nest_winston_1.WinstonModule.createLogger({ format, transports: mergedTransports });
}
exports.createLogger = createLogger;
