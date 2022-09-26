import { GoogleCloudLoggerOptionsInterface } from '../../logger/interfaces';
import * as Transport from 'winston-transport';
export declare class GkeGoogleCloudTransport extends Transport {
    private googleCloudOpts;
    private logging;
    private logger;
    constructor(opts: Transport.TransportStreamOptions, googleCloudLoggerOptions: GoogleCloudLoggerOptionsInterface);
    log(info: any, callback: () => void): void;
}
