import { ConfigService } from '@nestjs/config';
import { Logger } from '../../logger/services';
import { Connection } from 'typeorm';
export declare class ImportService {
    private readonly logger;
    private readonly configService;
    private readonly connection?;
    constructor(logger: Logger, configService: ConfigService, connection?: Connection);
    importData(connection: Connection, data: Record<string, unknown>, flush?: boolean): Promise<void>;
    importEntity(connection: Connection, entityName: string, savedEntities: Record<string, never[]>, sortedData: Record<string, unknown>): Promise<never[]>;
    sortEntities(entities: Record<string, unknown>, connection?: Connection): Record<string, unknown>;
    isInMap(entities: Record<string, unknown>, type: string): boolean;
    removeEntities(entities: Record<string, unknown>, connection: Connection): Promise<void>;
    seedRelations<Entity>(type: string, entities: Entity[], connection: Connection, savedEntities: Record<string, Entity[]>): Promise<Entity[]>;
    getDataFromEntities<Entity>(savedEntities: Entity, type: string): Record<string, unknown>[];
    createOrGetEntities<Entity>(entityName: string, entities: Entity[], connection?: Connection): Promise<Entity[]>;
    private updateEntityColumnValues;
    private getEntitiesToReturn;
    private findEntity;
    private getUniqueColumnNames;
}
