"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
/* eslint-disable @roq/repository-correct-export-annotation */
const lodash_1 = require("lodash");
const enums_1 = require("../../library/enums");
const typeorm_1 = require("typeorm");
class BaseRepository extends typeorm_1.Repository {
    buildSelectQuery(query = {}) {
        const entityMetadata = this.manager.connection.entityMetadatas.find((metadata) => metadata.targetName === this.target.name);
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
            this.processOrder(order, entityMetadata, tableName, q);
        }
        else {
            q.orderBy(`${tableName}.createdAt`, 'DESC');
        }
        if (limit && limit < queryLimit) {
            q.take(limit);
        }
        else {
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
    buildDeleteQuery(query) {
        const entityMetadata = this.manager.connection.entityMetadatas.find((metadata) => metadata.targetName === this.target.name);
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
    processOrder(order, entityMetadata, tableName, q) {
        const { sort, order: sortOrder } = order;
        const isRelationSort = sort.includes('.');
        if (isRelationSort) {
            const [relationName, relationSortField] = sort.split('.');
            const relation = entityMetadata.relations.find((r) => r.propertyPath === relationName);
            const relationPath = `${tableName}.${relation.propertyPath}`;
            const relationAlias = `${tableName}${relation.propertyPath}`;
            q.innerJoinAndSelect(relationPath, relationAlias);
            q.orderBy(`${relationAlias}.${relationSortField}`, sortOrder);
        }
        else {
            q.orderBy(`${tableName}.${sort}`, sortOrder);
        }
    }
    processFilter(filter, entityMetadata, tableName, q) {
        const joins = [];
        const columnNames = entityMetadata.ownColumns.map((column) => column.propertyName);
        const deriveRelatedFieldName = (relation) => `${(0, lodash_1.lowerFirst)(relation.inverseEntityMetadata.targetName.replace('Entity', ''))}Id`;
        const entityFilter = Object.keys(filter).filter((filterKey) => (columnNames.includes(filterKey) ||
            (entityMetadata.relations.some((r) => deriveRelatedFieldName(r) === filterKey))));
        entityFilter.forEach((key) => {
            const fieldFilter = filter[key];
            Object.keys(fieldFilter).forEach((operatorName) => {
                var _a;
                const operator = enums_1.OperatorEnum[operatorName];
                const relation = entityMetadata.relations.find((r) => deriveRelatedFieldName(r) === key);
                const columnCollation = this.processCollation((_a = entityMetadata.columns.find((column) => column.propertyName === key)) === null || _a === void 0 ? void 0 : _a.collation, operatorName);
                if (relation) {
                    joins.push(relation);
                    q.innerJoinAndSelect(`${tableName}.${relation.propertyPath}`, `${tableName}${relation.propertyPath}`).andWhere(`${tableName}${relation.propertyPath}.id ${operator} ${(0, lodash_1.isArray)(fieldFilter[operatorName]) ? `(:...${key}${operatorName})` : `:${key}${operatorName}${columnCollation}`}`, {
                        [`${key}${operatorName}`]: fieldFilter[operatorName],
                    });
                }
                else {
                    if (fieldFilter[operatorName] !== null) {
                        q.andWhere(`
      ${tableName}.${key} ${operator} ${(0, lodash_1.isArray)(fieldFilter[operatorName]) ? `(:...${key}${operatorName})` : `:${key}${operatorName}${columnCollation}`}`, {
                            [`${key}${operatorName}`]: fieldFilter[operatorName],
                        });
                    }
                    else if (fieldFilter[operatorName] === null) {
                        if (operator === enums_1.OperatorEnum.equalTo) {
                            q.andWhere(`
      ${tableName}.${key} IS NULL`);
                        }
                        else if (operator === enums_1.OperatorEnum.notEqualTo) {
                            q.andWhere(`
      ${tableName}.${key} IS NOT NULL`);
                        }
                    }
                }
            });
        });
        return joins;
    }
    processCollation(collation, operatorName) {
        const { collationLocales } = this.manager.connection.options.extra;
        if (!(0, lodash_1.isNil)(collationLocales === null || collationLocales === void 0 ? void 0 : collationLocales[collation])) {
            const { locale, operators } = collationLocales[collation];
            if (operators.split(',').includes(operatorName)) {
                return locale;
            }
        }
        return '';
    }
    async getLoaderEntitiesAndCount(parentIds, relationField, query) {
        const entityMetadata = this.manager.connection.entityMetadatas.find((metadata) => metadata.targetName === this.target.name);
        const tableName = entityMetadata.tableName;
        const relationFieldSelect = this.getLoaderRelationSelectField(entityMetadata, relationField);
        const alias = relationField.toLowerCase();
        const [entities, parentCounts] = await Promise.all([
            // clone deep query parameter because there is direct parameter mutation
            // happening in buildSelectQuery
            this.getLoaderEntities(tableName, relationFieldSelect, alias, (0, lodash_1.cloneDeep)(query)),
            this.getLoaderParentCount(relationFieldSelect, alias, (0, lodash_1.cloneDeep)(query)),
        ]);
        return parentIds.map(parentId => ({
            data: entities[parentId] || [],
            count: parentCounts[parentId] || 0
        }));
    }
    getLoaderRelationSelectField(entityMetadata, relationField) {
        const tableName = entityMetadata.tableName;
        const deriveRelatedFieldName = (rel) => `${(0, lodash_1.lowerFirst)(rel.inverseEntityMetadata.targetName.replace('Entity', ''))}Id`;
        const relation = entityMetadata.relations.find((r) => deriveRelatedFieldName(r) === relationField);
        let relationFieldSelect = `${tableName}.${relationField}`;
        if ((relation === null || relation === void 0 ? void 0 : relation.relationType) === 'many-to-many') {
            relationFieldSelect = `${tableName}${relation.propertyPath}.id`;
        }
        return relationFieldSelect;
    }
    async getLoaderEntities(tableName, relationFieldSelect, alias, query) {
        const { queryLimit } = this.manager.connection.options.extra;
        let limit = query === null || query === void 0 ? void 0 : query.limit;
        if (!limit || limit > queryLimit) {
            limit = queryLimit;
        }
        const offset = query.offset || 0;
        limit = offset + limit;
        const partitionedQuery = this
            .buildSelectQuery(query)
            .skip(null)
            .take(null)
            .select(`${tableName}.id, ${relationFieldSelect} as ${alias}`)
            .addSelect(`ROW_NUMBER () OVER (PARTITION BY ${relationFieldSelect}) - 1 AS rowIndex`);
        // this query will result to the id and foreign key field name or alias of related entity
        const entityLookupsQuery = this.manager.createQueryBuilder();
        entityLookupsQuery
            .select('e.*')
            .from(`(${partitionedQuery.getQuery()})`, 'e')
            .setParameters(partitionedQuery.getParameters())
            .where('e.rowIndex >= :offset', { offset })
            .andWhere('e.rowIndex < :limit', { limit });
        const entityLookups = await entityLookupsQuery.getRawMany();
        let result = [];
        if (entityLookups.length) {
            // we query the final result using the entity id field
            result = await this.buildSelectQuery(Object.assign(Object.assign({}, query || {}), { filter: {
                    id: {
                        valueIn: entityLookups.map(e => e.id)
                    }
                } }))
                .skip(null)
                .take(null)
                .getMany();
        }
        const groupedEntityLookUps = (0, lodash_1.groupBy)(entityLookups, alias);
        return Object.entries(groupedEntityLookUps)
            .reduce((acc, currentGroup) => {
            const [parentId, aggregatedLookup] = currentGroup;
            const ids = aggregatedLookup.map(e => e.id);
            return Object.assign(Object.assign({}, acc), { [parentId]: result.filter(e => ids.includes(e.id)) });
        }, {});
    }
    async getLoaderParentCount(relationFieldSelect, alias, query) {
        const q = this
            .buildSelectQuery(query)
            .skip(null)
            .take(null)
            .orderBy(null)
            .select(`COUNT(${relationFieldSelect}) as total, ${relationFieldSelect} as ${alias}`)
            .groupBy(`${relationFieldSelect}`);
        const data = await q.getRawMany();
        return data.reduce((acc, el) => (Object.assign(Object.assign({}, acc), { [el === null || el === void 0 ? void 0 : el[alias]]: Number(el.total) })), {});
    }
}
exports.BaseRepository = BaseRepository;
