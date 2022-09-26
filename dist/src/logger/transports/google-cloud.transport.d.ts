import * as Transport from 'winston-transport';
export declare class GoogleCloudTransport extends Transport {
    private logging;
    private logger;
    constructor(opts: Transport.TransportStreamOptions, name: string);
    log(info: any, callback: () => void): void;
}
