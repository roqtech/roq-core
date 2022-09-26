import { ArrayLoaderResponseInterface, QueryFilterInterface, QueryInterface, QueryOrderInterface } from '../../library/interfaces';
import { EntityMetadata, Repository, SelectQueryBuilder } from 'typeorm';
import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';
export declare class BaseRepository<T> extends Repository<T> {
    buildSelectQuery(query?: QueryInterface): SelectQueryBuilder<T>;
    buildDeleteQuery(query?: QueryInterface): SelectQueryBuilder<T>;
    protected processOrder(order: QueryOrderInterface, entityMetadata: EntityMetadata, tableName: string, q: SelectQueryBuilder<T>): void;
    protected processFilter(filter: QueryFilterInterface, entityMetadata: EntityMetadata, tableName: string, q: SelectQueryBuilder<T>): RelationMetadata[];
    protected processCollation(collation: string, operatorName: string): string;
    getLoaderEntitiesAndCount(parentIds: string[], relationField: string, query: QueryInterface): Promise<ArrayLoaderResponseInterface<T>[]>;
    protected getLoaderRelationSelectField(entityMetadata: EntityMetadata, relationField: string): string;
    protected getLoaderEntities(tableName: string, relationFieldSelect: string, alias: string, query: QueryInterface): Promise<{
        [key in string]: T[];
    }>;
    protected getLoaderParentCount(relationFieldSelect: string, alias: string, query: QueryInterface): Promise<{
        [key: string]: number;
    }>;
}
