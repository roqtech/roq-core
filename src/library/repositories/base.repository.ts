/* eslint-disable @roq/repository-correct-export-annotation */
import { isArray, isNil, lowerFirst } from 'lodash';
import { OperatorEnum } from 'src/library/enums';
import {
  BooleanFilterInterface,
  IdFilterInterface,
  IntFilterInterface,
  NumberFilterInterface,
  QueryFilterInterface,
  QueryInterface,
  StringFilterInterface,
} from 'src/library/interfaces';
import { EntityMetadata, Repository, SelectQueryBuilder } from 'typeorm';
import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';

export class BaseRepository<T> extends Repository<T> {
  public buildSelectQuery(query: QueryInterface = {}): SelectQueryBuilder<T> {
    const entityMetadata = this.manager.connection.entityMetadatas.find(
      (metadata) => metadata.targetName === (this.target as { name: string }).name,
    );
    const tableName = entityMetadata.tableName;
    const columns = entityMetadata.columns;
    const q = this.createQueryBuilder(tableName);
    const { queryLimit } = this.manager.connection.options.extra;
    const referenceColumns = columns.filter((c) => c.referencedColumn);
    const { limit, fields, search, order, offset, filter } = query;
    if (fields) {
      q.select([
        ...fields.filter((f) => columns.find((c) => c.propertyName === f)).map((field) => `${tableName}.${field}`),
        ...referenceColumns.map((c) => `${tableName}.${c.propertyName}`),
      ]);
    }

    if (search) {
      const { key, value } = search;
      q.andWhere(`${tableName}.${key} LIKE :value `, { value: `%${value}%` });
    }
    if (order) {
      const { sort, order: sortOrder } = order;
      q.orderBy(`${tableName}.${sort}`, sortOrder);
    } else {
      q.orderBy(`${tableName}.createdAt`, 'DESC');
    }
    if (limit && limit < queryLimit) {
      q.take(limit);
    } else {
      q.take(queryLimit);
    }
    if (offset) {
      q.skip(offset);
    }
    if (filter) {
      this.processFilter(filter, entityMetadata, tableName, q);
    }

    return q;
  }
  public buildDeleteQuery(query?: QueryInterface): SelectQueryBuilder<T> {
    const entityMetadata = this.manager.connection.entityMetadatas.find(
      (metadata) => metadata.targetName === (this.target as { name: string }).name,
    );
    const tableName = entityMetadata.tableName;
    const q = this.createQueryBuilder(tableName);
    const { filter } = query;

    const joins = [];

    if (filter) {
      joins.push(...this.processFilter(filter, entityMetadata, tableName, q));
    }

    const cascadeRelations = entityMetadata.relations
      .filter((relation) => relation.onDelete === 'CASCADE')
      .filter((relation) => !joins.find((r) => relation === r))
      .map((relation) => relation.propertyPath);

    cascadeRelations.forEach((relation) => {
      q.leftJoinAndSelect(`${tableName}.${relation}`, `${tableName}${relation}`);
    });

    return q;
  }

  private processFilter(
    filter: QueryFilterInterface,
    entityMetadata: EntityMetadata,
    tableName: string,
    q: SelectQueryBuilder<T>,
  ): RelationMetadata[] {
    const joins = [];
    const columnNames = entityMetadata.ownColumns.map((column) => column.propertyName);
    const deriveRelatedFieldName = (relation)=>`${lowerFirst(relation.inverseEntityMetadata.targetName.replace('Entity', ''))}Id`;
    const entityFilter = Object.keys(filter).filter((filterKey) => (
      columnNames.includes(filterKey) ||
      (
        entityMetadata.relations.some(
          (r) => deriveRelatedFieldName(r) === filterKey,
        )
      )
    )
    );
    entityFilter.forEach((key) => {
      const fieldFilter:
        | StringFilterInterface
        | NumberFilterInterface
        | BooleanFilterInterface
        | IntFilterInterface
        | IdFilterInterface = filter[key];
      Object.keys(fieldFilter).forEach((operatorName) => {
        const operator = OperatorEnum[operatorName];
        const relation = entityMetadata.relations.find(
          (r) => deriveRelatedFieldName(r) === key,
        );
        const columnCollation = this.processCollation(
          entityMetadata.columns.find((column) => column.propertyName === key)?.collation,
          operatorName,
        );
        if (relation) {
          joins.push(relation);
          q.innerJoinAndSelect(
            `${tableName}.${relation.propertyPath}`,
            `${tableName}${relation.propertyPath}`,
          ).andWhere(
            `${tableName}${relation.propertyPath}.id ${operator} ${
              isArray(fieldFilter[operatorName]) ? `(:...${key}${operatorName})` : `:${key}${operatorName}${columnCollation}`
            }`,
            {
              [`${key}${operatorName}`]: fieldFilter[operatorName],
            },
          );
        } else {
          if (fieldFilter[operatorName] !== null) {
            q.andWhere(
              `
      ${tableName}.${key} ${operator} ${
                isArray(fieldFilter[operatorName]) ? `(:...${key}${operatorName})` : `:${key}${operatorName}${columnCollation}`
              }`,
              {
                [`${key}${operatorName}`]: fieldFilter[operatorName],
              },
            );
          } else if (fieldFilter[operatorName] === null) {
            if (operator === OperatorEnum.equalTo) {
              q.andWhere(
                `
      ${tableName}.${key} IS NULL`,
              );
            } else if (operator === OperatorEnum.notEqualTo) {
              q.andWhere(
                `
      ${tableName}.${key} IS NOT NULL`,
              );
            }
          }
        }
      });
    });
    return joins;
  }

  protected processCollation(collation: string, operatorName: string): string {
    const { collationLocales } = this.manager.connection.options.extra;
    if (!isNil(collationLocales?.[collation])) {
      const { locale, operators } = collationLocales[collation];
      if (operators.split(',').includes(operatorName)) {
        return locale;
      }
    }
    return '';
  }
}
