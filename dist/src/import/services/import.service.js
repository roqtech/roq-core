"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const faker = require("faker");
const enums_1 = require("../../logger/enums");
const services_1 = require("../../logger/services");
const typeorm_1 = require("typeorm");
const pLimit = require('p-limit');
let ImportService = class ImportService {
    constructor(logger, configService, connection) {
        this.logger = logger;
        this.configService = configService;
        this.connection = connection;
    }
    async importData(connection = this.connection, data, flush = false) {
        this.logger.log({
            type: enums_1.LoggingTypeEnum.importData,
            message: 'Sorting of entities started',
        });
        const sortedData = this.sortEntities(data, connection);
        this.logger.log({
            type: enums_1.LoggingTypeEnum.importData,
            message: 'Sorting of entities done',
        });
        if (flush) {
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: 'Removing of entities started',
            });
            await this.removeEntities(sortedData, connection);
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: 'Removing of entities done',
            });
        }
        const entityNames = Object.keys(sortedData);
        const limiter = pLimit(this.configService.get('application.maxConcurrencyLimit'));
        await entityNames.reduce((accP, entityName) => limiter(async () => {
            const acc = await accP;
            return Object.assign(Object.assign({}, acc), { [entityName]: await this.importEntity(connection, entityName, acc, sortedData) });
        }), Promise.resolve({}));
    }
    async importEntity(connection = this.connection, entityName, savedEntities, sortedData) {
        this.logger.log({
            type: enums_1.LoggingTypeEnum.importData,
            message: `Importing of ${entityName} started`,
        });
        const importData = sortedData[entityName];
        this.logger.log({
            type: enums_1.LoggingTypeEnum.importData,
            message: `Seeding of ${entityName} started`,
        });
        try {
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: `Seeding of relations for ${entityName} started`,
            });
            const entitiesWithRelations = await this.seedRelations(entityName, importData, connection, savedEntities);
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: `Seeding of relations for ${entityName} done`,
            });
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: `Preparation of TypeORM Entities for ${entityName} started`,
            });
            const newEntities = await this.createOrGetEntities(entityName, entitiesWithRelations, connection);
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: `Preparation of TypeORM Entities for ${entityName} done`,
            });
            const savedEntity = await connection.manager.save(newEntities, { chunk: 100 });
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: `Seeding of ${entityName} done`,
            });
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: `Importing of ${entityName} done`,
            });
            return savedEntity;
        }
        catch (error) {
            this.logger.error({
                type: enums_1.LoggingTypeEnum.error,
                stack: error.stack,
                message: error,
            });
            throw error;
        }
    }
    sortEntities(entities, connection = this.connection) {
        const result = {};
        let count = 0;
        while (Object.keys(entities).length !== Object.keys(result).length && count < 100) {
            count++;
            Object.keys(entities).forEach((key) => {
                if (result[key]) {
                    return;
                }
                const relations = connection
                    .getMetadata(key)
                    .relations.filter((relation) => {
                    if (this.isInMap(result, relation.type.name)) {
                        return false;
                    }
                    //check if relation required for many to many
                    if (relation.isManyToMany) {
                        return relation.isManyToManyOwner;
                    }
                    //check if relation required for one to many
                    else if (relation.isManyToOne) {
                        return true;
                    }
                    //check if relation required for one to one
                    else if (relation.isOneToOne) {
                        return relation.isOneToOneOwner;
                    }
                });
                if (relations.length === 0) {
                    result[key] = entities[key];
                }
            });
        }
        return result;
    }
    isInMap(entities, type) {
        return Object.keys(entities).some((key) => key === type);
    }
    async removeEntities(entities, connection) {
        const keys = Object.keys(entities).reverse();
        const limiter = pLimit(this.configService.get('application.maxConcurrencyLimit'));
        await Promise.all(keys.map((key) => limiter(async () => {
            const relations = connection.getMetadata(key).relations.filter((relation) => relation.isManyToManyOwner);
            await Promise.all(relations.map(({ joinTableName }) => limiter(() => connection.manager.query(`TRUNCATE TABLE "${joinTableName}" CASCADE;`))));
            await connection.manager.delete(key, {});
        })));
    }
    async seedRelations(type, entities, connection = this.connection, savedEntities) {
        const newEntities = [];
        const relations = connection
            .getMetadata(type)
            .relations.filter((relation) => relation.isManyToOne ||
            (relation.isManyToMany && relation.isManyToManyOwner) ||
            (relation.isOneToOne && relation.isOneToOneOwner));
        if (relations.length > 0) {
            for (let index = 0; index < entities.length; index++) {
                let addEntity = true;
                const entity = entities[index];
                await Promise.all(relations.map(async (rel) => {
                    const relation = rel;
                    const keys = Object.keys(entity);
                    const keyExists = keys.find((k) => k.includes(relation.propertyName + '@'));
                    const data = this.getDataFromEntities(savedEntities, relation.type.name);
                    if (keyExists) {
                        const [, columnName] = keyExists.split('@');
                        if (relation.isManyToMany) {
                            const arrayValues = entity[keyExists].slice(1, -1);
                            if (arrayValues.length === 0) {
                                return;
                            }
                            const values = arrayValues.split('-');
                            const requestedEntities = await connection
                                .createQueryBuilder(relation.type.name, 'entity')
                                .where(`entity.${columnName}  IN (:...values)`, { value: values.filter((value) => !!value) })
                                .getMany();
                            if (requestedEntities.length > 0) {
                                entity[relation.propertyName] = requestedEntities;
                            }
                            else {
                                const errorMessage = `Requested relation entities was not found ${keyExists}:${entity[keyExists]}`;
                                this.logger.log(errorMessage);
                                addEntity = false;
                            }
                        }
                        else {
                            if (entity[keyExists] === '' || entity[keyExists] === 'null') {
                                return;
                            }
                            const requestedEntity = await connection
                                .createQueryBuilder(relation.type.name, 'entity')
                                .where(`entity.${columnName} = :value`, { value: entity[keyExists] })
                                .getOne();
                            if (requestedEntity) {
                                entity[relation.propertyName] = requestedEntity;
                            }
                            else {
                                const errorMessage = `Requested relation entity was not found '${keyExists}:${entity[keyExists]}'`;
                                this.logger.log(errorMessage);
                                addEntity = false;
                            }
                        }
                        return;
                    }
                    entity[relation.propertyName] = relation.isManyToOne
                        ? data[faker.datatype.number({ min: 0, max: data.length - 1 })]
                        : relation.isOneToOne
                            ? data[index]
                            : faker.random.arrayElements(data, faker.datatype.number({ min: 1, max: 5 }));
                }));
                if (addEntity) {
                    newEntities.push(entity);
                }
            }
        }
        else {
            newEntities.push(...entities);
        }
        return newEntities;
    }
    getDataFromEntities(savedEntities, type) {
        const data = [];
        const types = Object.keys(savedEntities);
        types.forEach((t) => {
            if (t === type.toString()) {
                data.push(...savedEntities[t]);
            }
        });
        return data;
    }
    async createOrGetEntities(entityName, entities, connection = this.connection) {
        const entityMetaData = connection.getMetadata(entityName);
        const updatedEntities = this.updateEntityColumnValues(entityName, entities, connection);
        if (entityMetaData.ownUniques.length) {
            return Promise.all(updatedEntities.map((entity) => this.getEntitiesToReturn(entity, connection, entityName)));
        }
        return connection.manager.create(entityName, updatedEntities);
    }
    updateEntityColumnValues(entityName, entities, connection) {
        const entityMetaData = connection.getMetadata(entityName);
        const jsonColumns = entityMetaData.columns
            .filter((e) => e.type === 'json' || e.type === 'jsonb')
            .map((e) => e.databaseName);
        if (!jsonColumns.length) {
            return entities;
        }
        return entities.reduce((acc, ent) => {
            jsonColumns.forEach((jsonCol) => {
                try {
                    if (ent[jsonCol]) {
                        ent[jsonCol] = JSON.parse(ent[jsonCol]);
                    }
                }
                catch (_) {
                    /* Do nothing */
                }
            });
            return [...acc, ent];
        }, []);
    }
    async getEntitiesToReturn(entity, connection = this.connection, entityName) {
        const foundEntity = await this.findEntity(entity, connection, entityName);
        if (foundEntity) {
            Object.keys(entity).forEach((key) => {
                foundEntity[key] = entity[key];
            });
            return connection.manager.create(entityName, foundEntity);
        }
        return connection.manager.create(entityName, entity);
    }
    async findEntity(entity, connection, entityName) {
        const entityMetaData = connection.getMetadata(entityName);
        const columnNames = this.getUniqueColumnNames(entity, entityMetaData);
        const query = connection.createQueryBuilder(entityName, 'entity');
        for (const columns of columnNames || []) {
            for (const columnName of columns || []) {
                query.andWhere(`entity.${columnName} = :${columnName}Value`, {
                    [`${columnName}Value`]: entity[columnName],
                });
            }
        }
        const foundEntities = await query.getMany();
        return foundEntities.find((i) => !!i);
    }
    getUniqueColumnNames(entity, entityMetaData) {
        return entityMetaData.ownUniques.reduce((acc, unique) => {
            const givenColumnNames = unique.givenColumnNames || [];
            if (!givenColumnNames.length) {
                return acc;
            }
            return [...acc, givenColumnNames.filter((name) => entity[name] !== undefined)];
        }, []);
    }
};
ImportService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.Logger,
        config_1.ConfigService,
        typeorm_1.Connection])
], ImportService);
exports.ImportService = ImportService;
