"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityListener = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const enums_1 = require("../../entityListener/enums");
const services_1 = require("../../platformClient/platformEventClient/services");
const typeorm_1 = require("typeorm");
let EntityListener = class EntityListener {
    constructor(platformClientEventService, prefix, excludedFields) {
        this.platformClientEventService = platformClientEventService;
        this.prefix = prefix;
        this.excludedFields = excludedFields;
    }
    getEntityName() {
        var _a, _b, _c, _d;
        const entityClass = this.listenTo();
        const entityName = typeof entityClass === 'string' ? entityClass : entityClass === null || entityClass === void 0 ? void 0 : entityClass.name;
        // Parse the name from camel case to Upper snake case e.g. fooBarEntity -> FOO_BAR_ENTITY
        const eventEntityName = (_b = (0, lodash_1.map)((_a = (0, lodash_1.snakeCase)(entityName)) === null || _a === void 0 ? void 0 : _a.split('_'), lodash_1.upperCase)) === null || _b === void 0 ? void 0 : _b.join('_');
        // Remove the word entity from the name e.g FOO_ENTITY -> FOO
        return (_d = (_c = eventEntityName === null || eventEntityName === void 0 ? void 0 : eventEntityName.split('_')) === null || _c === void 0 ? void 0 : _c.slice(0, -1)) === null || _d === void 0 ? void 0 : _d.join('_');
    }
    /***
     * Remove all excluded fields and relational objects from the argument and keep only the primitive fields
     * @param {object} obj - Object to remove non primitive values from
     * @private {object}
     */
    filterPayload(obj) {
        if (!obj) {
            return obj;
        }
        // Get all the keys of nested relational objects which have related Id field.
        const relationKeys = Object.keys(obj)
            .filter((i) => i.endsWith('Id'))
            .map((i) => i === null || i === void 0 ? void 0 : i.split('Id')[0]);
        return Object.entries(obj).reduce((acc, [key, value]) => {
            if (relationKeys.includes(key)) {
                return acc;
            }
            if (this.excludedFields && this.excludedFields.includes(key)) {
                return acc;
            }
            return Object.assign(Object.assign({}, acc), { [key]: value });
        }, {});
    }
    triggerEvent(eventType, data) {
        const object = this.getEntityName();
        const id = (0, lodash_1.get)(data, 'current.id');
        const eventPayload = {
            id,
            name: `${this.prefix}_${object}_${eventType}`,
            object: (0, lodash_1.camelCase)(object),
            data: {
                current: this.filterPayload(data === null || data === void 0 ? void 0 : data.current),
                previous: this.filterPayload(data === null || data === void 0 ? void 0 : data.previous),
            },
        };
        void this.platformClientEventService.trigger(eventPayload);
    }
    afterInsert(event) {
        return this.triggerEvent(enums_1.EntityListenerEventTypeEnum.INSERT, { previous: null, current: event.entity });
    }
    afterUpdate(event) {
        if (event.updatedColumns.length || event.updatedRelations.length) {
            return this.triggerEvent(enums_1.EntityListenerEventTypeEnum.UPDATE, {
                previous: event.databaseEntity,
                current: event.entity,
            });
        }
    }
    afterRemove(event) {
        return this.triggerEvent(enums_1.EntityListenerEventTypeEnum.REMOVE, {
            previous: event.databaseEntity,
            current: event.entity,
        });
    }
};
EntityListener = tslib_1.__decorate([
    (0, typeorm_1.EventSubscriber)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformEventClientService, String, Array])
], EntityListener);
exports.EntityListener = EntityListener;
