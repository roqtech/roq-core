import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as faker from 'faker';
import { LoggingTypeEnum } from 'src/logger/enums';
import { Logger } from 'src/logger/services';
import { Connection, DeepPartial, EntityMetadata } from 'typeorm';
import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';

const pLimit = require('p-limit')

@Injectable()
export class ImportService {
  constructor(
    private readonly logger: Logger,
    private readonly configService: ConfigService,
    private readonly connection?: Connection,
  ) {}

  async importData(
    connection: Connection = this.connection,
    data: Record<string, unknown>,
    flush = false,
  ): Promise<void> {
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: 'Sorting of entities started',
    })
    const sortedData = this.sortEntities(data, connection)
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: 'Sorting of entities done',
    })

    if (flush) {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Removing of entities started',
      })
      await this.removeEntities(sortedData, connection)
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Removing of entities done',
      })
    }
    const entityNames = Object.keys(sortedData)
    const limiter = pLimit(this.configService.get('application.maxConcurrencyLimit'))
    await entityNames.reduce(
      (accP, entityName) =>
        limiter(async () => {
          const acc = await accP
          return {
            ...acc,
            [entityName]: await this.importEntity(connection, entityName, acc, sortedData),
          }
        }),
      Promise.resolve({}),
    )
  }

  async importEntity(
    connection: Connection = this.connection,
    entityName: string,
    savedEntities: Record<string, never[]>,
    sortedData: Record<string, unknown>,
  ): Promise<never[]> {
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: `Importing of ${entityName} started`,
    })

    const importData = sortedData[entityName] as []
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: `Seeding of ${entityName} started`,
    })
    try {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Seeding of relations for ${entityName} started`,
      })
      const entitiesWithRelations = await this.seedRelations(entityName, importData, connection, savedEntities)
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Seeding of relations for ${entityName} done`,
      })
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Preparation of TypeORM Entities for ${entityName} started`,
      })
      const newEntities = await this.createOrGetEntities(entityName, entitiesWithRelations, connection)
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Preparation of TypeORM Entities for ${entityName} done`,
      })
      const savedEntity = await connection.manager.save(newEntities, { chunk: 100 })
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Seeding of ${entityName} done`,
      })
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Importing of ${entityName} done`,
      })
      return savedEntity
    } catch (error) {
      this.logger.error({
        type: LoggingTypeEnum.error,
        stack: error.stack,
        message: error,
      })
      throw error
    }
  }

  sortEntities(entities: Record<string, unknown>, connection: Connection = this.connection): Record<string, unknown> {
    const result = {}
    let count = 0

    while (Object.keys(entities).length !== Object.keys(result).length && count < 100) {
      count++
      Object.keys(entities).forEach((key) => {
        if (result[key]) {
          return
        }
        const relations = connection
          .getMetadata(key)
          .relations.filter((relation: RelationMetadata & { type?: { name: string } }) => {
            if (this.isInMap(result, relation.type.name)) {
              return false
            }

            //check if relation required for many to many
            if (relation.isManyToMany) {
              return relation.isManyToManyOwner
            }
            //check if relation required for one to many
            else if (relation.isManyToOne) {
              return true
            }
            //check if relation required for one to one
            else if (relation.isOneToOne) {
              return relation.isOneToOneOwner
            }
          })
        if (relations.length === 0) {
          result[key] = entities[key]
        }
      })
    }
    return result
  }

  isInMap(entities: Record<string, unknown>, type: string): boolean {
    return Object.keys(entities).some((key) => key === type)
  }

  async removeEntities(entities: Record<string, unknown>, connection: Connection): Promise<void> {
    const keys = Object.keys(entities).reverse()
    const limiter = pLimit(this.configService.get('application.maxConcurrencyLimit'))
    await Promise.all(
      keys.map((key) =>
        limiter(async () => {
          const relations = connection.getMetadata(key).relations.filter((relation) => relation.isManyToManyOwner)
          await Promise.all(
            relations.map(({ joinTableName }) =>
              limiter(() => connection.manager.query(`TRUNCATE TABLE "${joinTableName}" CASCADE;`)),
            ),
          )
          await connection.manager.delete(key, {})
        }),
      ),
    )
  }

  async seedRelations<Entity>(
    type: string,
    entities: Entity[],
    connection: Connection = this.connection,
    savedEntities: Record<string, Entity[]>,
  ): Promise<Entity[]> {
    const newEntities = []
    const relations = connection
      .getMetadata(type)
      .relations.filter(
        (relation) =>
          relation.isManyToOne ||
          (relation.isManyToMany && relation.isManyToManyOwner) ||
          (relation.isOneToOne && relation.isOneToOneOwner),
      )
    if (relations.length > 0) {
      for (let index = 0; index < entities.length; index++) {
        let addEntity = true
        const entity = entities[index]
        await Promise.all(
          relations.map(async (rel) => {
            const relation = rel as RelationMetadata & { type?: { name: string } }
            const keys = Object.keys(entity)
            const keyExists = keys.find((k) => k.includes(relation.propertyName + '@'))
            const data = this.getDataFromEntities(savedEntities, relation.type.name)
            if (keyExists) {
              const [, columnName] = keyExists.split('@')
              if (relation.isManyToMany) {
                const arrayValues: string = entity[keyExists].slice(1, -1)
                if (arrayValues.length === 0) {
                  return
                }
                const values = arrayValues.split('-')
                const requestedEntities = await connection
                  .createQueryBuilder(relation.type.name, 'entity')
                  .where(`entity.${columnName}  IN (:...values)`, { value: values.filter((value) => !!value) })
                  .getMany()
                if (requestedEntities.length > 0) {
                  entity[relation.propertyName] = requestedEntities
                } else {
                  const errorMessage = `Requested relation entities was not found ${keyExists}:${entity[keyExists]}`
                  this.logger.log(errorMessage)
                  addEntity = false
                }
              } else {
                if (entity[keyExists] === '' || entity[keyExists] === 'null') {
                  return
                }
                const requestedEntity = await connection
                  .createQueryBuilder(relation.type.name, 'entity')
                  .where(`entity.${columnName} = :value`, { value: entity[keyExists] })
                  .getOne()
                if (requestedEntity) {
                  entity[relation.propertyName] = requestedEntity
                } else {
                  const errorMessage = `Requested relation entity was not found '${keyExists}:${entity[keyExists]}'`
                  this.logger.log(errorMessage)
                  addEntity = false
                }
              }
              return
            }
            entity[relation.propertyName] = relation.isManyToOne
              ? data[faker.datatype.number({ min: 0, max: data.length - 1 })]
              : relation.isOneToOne
              ? data[index]
              : faker.random.arrayElements(data, faker.datatype.number({ min: 1, max: 5 }))
          }),
        )
        if (addEntity) {
          newEntities.push(entity)
        }
      }
    } else {
      newEntities.push(...entities)
    }

    return newEntities
  }

  getDataFromEntities<Entity>(savedEntities: Entity, type: string): Record<string, unknown>[] {
    return Object.keys(savedEntities).reduce((acc, t) => {
      if (t === type.toString()) {
        return [...acc, savedEntities[t]]
      }
      return acc
    }, [])
  }

  async createOrGetEntities<Entity>(entityName: string, entities: Entity[], connection: Connection = this.connection): Promise<Entity[]> {
    const entityMetaData = connection.getMetadata(entityName)
    const updatedEntities = this.updateEntityColumnValues(entityName, entities, connection)
    if (entityMetaData.ownUniques.length) {
      return Promise.all(updatedEntities.map((entity) => this.getEntitiesToReturn(entity, connection, entityName)))
    }
    return connection.manager.create(entityName, updatedEntities as DeepPartial<Entity>[])
  }

  private updateEntityColumnValues<Entity>(entityName: string, entities: Entity[], connection: Connection): Entity[] {
    const entityMetaData = connection.getMetadata(entityName)
    const jsonColumns = entityMetaData.columns
      .filter((e) => e.type === 'json' || e.type === 'jsonb')
      .map((e) => e.databaseName)
    if (!jsonColumns.length) {
      return entities
    }
    return entities.reduce((acc, ent) => {
      jsonColumns.forEach((jsonCol) => {
        try {
          if (ent[jsonCol]) {
            ent[jsonCol] = JSON.parse(ent[jsonCol])
          }
        } catch (_) {
          /* Do nothing */
        }
      })
      return [...acc, ent]
    }, [])
  }

  private async getEntitiesToReturn<Entity>(
    entity: Entity,
    connection: Connection = this.connection,
    entityName: string,
  ): Promise<Entity> {
    const foundEntity = await this.findEntity(entity, connection, entityName)
    if (foundEntity) {
      Object.keys(entity).forEach((key) => {
        foundEntity[key] = entity[key]
      })
      return connection.manager.create<Entity>(entityName, foundEntity)
    }
    return connection.manager.create<Entity>(entityName, entity as DeepPartial<Entity>)
  }

  private async findEntity<Entity>(
    entity: Entity,
    connection: Connection,
    entityName: string,
  ): Promise<DeepPartial<Entity>> {
    const entityMetaData = connection.getMetadata(entityName)
    const columnNames = this.getUniqueColumnNames(entity, entityMetaData)
    const query = connection.createQueryBuilder<DeepPartial<Entity>>(entityName, 'entity')
    for (const columns of columnNames || []) {
      for (const columnName of columns || []) {
        query.andWhere(`entity.${columnName} = :${columnName}Value`, {
          [`${columnName}Value`]: entity[columnName],
        })
      }
    }
    const foundEntities = await query.getMany()
    return foundEntities.find((i) => !!i)
  }

  private getUniqueColumnNames<Entity>(entity: Entity, entityMetaData: EntityMetadata): string[][] {
    return entityMetaData.ownUniques.reduce((acc, unique) => {
      const givenColumnNames = (unique.givenColumnNames as string[]) || []
      if (!givenColumnNames.length) {
        return acc
      }
      return [...acc, givenColumnNames.filter((name) => entity[name] !== undefined)]
    }, [])
  }
}
