import { ConfigService } from '@nestjs/config';
import { CommandOptions } from 'commander';
import { ImportService } from '../../import/services';
import { PlatformEventSubscriber } from '../../import/interface';
import { Logger } from '../../logger/services';
import { PlatformServiceAccountClientService } from '../../platformClient/services';
import { Connection } from 'typeorm';
export declare class ImportConsole {
    logger: Logger;
    private importService;
    private configService;
    private platformServiceAccountClientService;
    constructor(logger: Logger, importService: ImportService, configService: ConfigService, platformServiceAccountClientService: PlatformServiceAccountClientService);
    importData(options: CommandOptions & {
        flush?: boolean;
        initial?: boolean;
        dbConnection?: Connection;
    }): Promise<void>;
    importEntities(flush: boolean, connection: Connection, { source, absolute }: {
        source: string;
        absolute?: boolean;
    }): Promise<void>;
    importEventSubscribers(eventSubscribers: PlatformEventSubscriber[]): Promise<void>;
}
