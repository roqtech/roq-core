import { Injectable } from '@nestjs/common';
import faker from 'faker';
import { LoggingTypeEnum } from 'src/logger/enums';
import { Logger } from 'src/logger/services';
import { Connection, DeepPartial } from 'typeorm';
import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';

@Injectable()
export class ImportService {
  constructor(
    private logger: Logger
  ) {}

  async importData(connection: Connection, data: Record<string, unknown>, flush = false): Promise<void> {
    const savedEntities = {};

    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: 'Sorting of entities started',
    });
    const sortedData = this.sortEntities(data, connection);
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: 'Sorting of entities done',
    });

    if (flush) {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Removing of entities started',
      });
      await this.removeEntities(sortedData, connection);
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Removing of entities started',
      });
    }
    const entityNames = Object.keys(sortedData);
    for (const entityName of entityNames) {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Importing of ${entityName} started`,
      });

      const importData = sortedData[entityName] as [];
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Seeding of ${entityName} started`,
      });
      const entitiesWithRelations = await this.seedRelations(entityName, importData, connection, savedEntities);

      const newEntities = await this.createOrGetEntities(entityName, entitiesWithRelations, connection);
      savedEntities[entityName] = await connection.manager.save(newEntities, { chunk: 100 });
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Seeding of ${entityName} done`,
      });
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Importing of ${entityName} done`,
      });
    }
  }

  sortEntities(entities: Record<string, unknown>, connection: Connection): Record<string, unknown> {
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
          .relations.filter((relation: RelationMetadata & { type?: { name: string } }) => {
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

  isInMap(entities: Record<string, unknown>, type: string): boolean {
    return Object.keys(entities).some((key) => key === type);
  }

  async removeEntities(entities: Record<string, unknown>, connection: Connection): Promise<void> {
    const keys = Object.keys(entities).reverse();
    for (const key of keys) {
      const relations = connection.getMetadata(key).relations.filter((relation) => relation.isManyToManyOwner);
      for (const relation of relations) {
        await connection.manager.query(`DELETE FROM "${relation.joinTableName}";`);
      }

      await connection.manager.delete(key, {});
    }
  }

  async seedRelations<Entity>(
    type: string,
    entities: Entity[],
    connection: Connection,
    savedEntities: Record<string, Entity[]>,
  ): Promise<Entity[]> {
    const newEntities = [];
    const relations = connection
      .getMetadata(type)
      .relations.filter(
        (relation) =>
          relation.isManyToOne ||
          (relation.isManyToMany && relation.isManyToManyOwner) ||
          (relation.isOneToOne && relation.isOneToOneOwner),
      );
    if (relations.length > 0) {
      for (let index = 0; index < entities.length; index++) {
        let addEntity = true;
        const entity = entities[index];
        for (const rel of relations) {
          const relation = rel as RelationMetadata & { type?: { name: string } };
          const keys = Object.keys(entity);
          const keyExists = keys.find((k) => k.includes(relation.propertyName + '@'));
          const data = this.getDataFromEntities(savedEntities, relation.type.name);
          if (keyExists) {
            const [, columnName] = keyExists.split('@');
            if (relation.isManyToMany) {
              const requestedEntities = [];
              const arrayValues: string = entity[keyExists].slice(1, -1);
              if (arrayValues.length === 0) {
                continue;
              }
              const values = arrayValues.split('-');
              for (const value of values) {
                if (value === '' || value === 'null') {
                  continue;
                }
                const requestedEntity = await connection
                  .createQueryBuilder(relation.type.name, 'entity')
                  .where(`entity.${columnName} = :value`, { value })
                  .getOne();
                if (requestedEntity) {
                  requestedEntities.push(requestedEntity);
                }
              }
              if (requestedEntities.length > 0) {
                entity[relation.propertyName] = requestedEntities;
              } else {
                const errorMessage = `Requested relation entities was not found ${keyExists}:${entity[keyExists]}`;
                this.logger.log(errorMessage);
                addEntity = false;
              }
            } else {
              if (entity[keyExists] === '' || entity[keyExists] === 'null') {
                continue;
              }
              const requestedEntity = await connection
                .createQueryBuilder(relation.type.name, 'entity')
                .where(`entity.${columnName} = :value`, { value: entity[keyExists] })
                .getOne();
              if (requestedEntity) {
                entity[relation.propertyName] = requestedEntity;
              } else {
                const errorMessage = `Requested relation entity was not found '${keyExists}:${entity[keyExists]}'`;
                this.logger.log(errorMessage);
                addEntity = false;
              }
            }
            continue;
          }
          entity[relation.propertyName] = relation.isManyToOne
            ? data[faker.datatype.number({ min: 0, max: data.length - 1 })]
            : relation.isOneToOne
              ? data[index]
              : faker.random.arrayElements(data, faker.datatype.number({ min: 1, max: 5 }));
        }
        if (addEntity) {
          newEntities.push(entity);
        }
      }
    } else {
      newEntities.push(...entities);
    }

    return newEntities;
  }

  getDataFromEntities<Entity>(savedEntities: Entity, type: string): Record<string, unknown>[] {
    const data = [];
    const types = Object.keys(savedEntities);
    types.forEach((t) => {
      if (t === type.toString()) {
        data.push(...savedEntities[t]);
      }
    });
    return data;
  }

  async createOrGetEntities<Entity>(entityName: string, entities: Entity[], connection: Connection): Promise<Entity[]> {
    const entitiesToReturn = [];
    const entityMetaData = connection.getMetadata(entityName);
    const jsonColumns = entityMetaData.columns
      .filter((e) => e.type === 'json' || e.type === 'jsonb')
      .map((e) => e.databaseName);
    if (jsonColumns.length > 0) {
      for (const ent of entities) {
        for (const jsonCol of jsonColumns) {
          try {
            if (ent[jsonCol]) {
              ent[jsonCol] = JSON.parse(ent[jsonCol]);
            }
          } catch (_) {
            /* Do nothing */
          }
        }
      }
    }
    if (entityMetaData.ownUniques.length !== 0) {
      for (const entity of entities) {
        const columnNames: string[][] = [[]];
        entityMetaData.ownUniques.forEach((unique) => {
          const givenColumnNames = (unique.givenColumnNames as string[]) || [];
          if (givenColumnNames.length > 0) {
            // For compound unique constraints
            if (givenColumnNames.length > 1) {
              const compoundUniqueConstraintFields = [];
              let considerColumnsFromCompoundConstraint = false;
              givenColumnNames.forEach((name) => {
                if (entity[name] !== undefined) {
                  compoundUniqueConstraintFields.push(name);
                } else {
                  considerColumnsFromCompoundConstraint = false;
                }
              });
              if (considerColumnsFromCompoundConstraint) {
                columnNames.push(compoundUniqueConstraintFields);
              }
            } else if (entity[givenColumnNames[0]] !== undefined) {
              columnNames.push(givenColumnNames);
            }
          }
        });

        let foundEntity;
        if (columnNames.length !== 0) {
          for (const columns of columnNames) {
            const query = connection.createQueryBuilder(entityName, 'entity');
            if (columns.length > 0) {
              for (const columnName of columns) {
                query.andWhere(`entity.${columnName} = :value`, { value: entity[columnName] });
              }
              foundEntity = await query.getOne();
              if (foundEntity) {
                break;
              }
            }
          }
        }
        if (foundEntity) {
          Object.keys(entity).forEach((key) => {
            foundEntity[key] = entity[key];
          });
          entitiesToReturn.push(connection.manager.create(entityName, foundEntity));
        } else {
          entitiesToReturn.push(connection.manager.create(entityName, entity as DeepPartial<Entity>));
        }
      }
    } else {
      entitiesToReturn.push(...connection.manager.create(entityName, entities as DeepPartial<Entity>[]));
    }

    return entitiesToReturn;
  }
}
