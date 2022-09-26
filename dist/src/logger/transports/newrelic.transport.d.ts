import { Logform } from 'winston';
import * as Transport from 'winston-transport';
export declare class NewrelicTransport extends Transport {
    constructor(opts: Transport.TransportStreamOptions);
    log(info: Logform.TransformableInfo, callback: () => void): void;
}
