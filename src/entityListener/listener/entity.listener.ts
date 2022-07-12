import { camelCase, get, map, snakeCase, upperCase } from 'lodash';
import { EntityListenerEventTypeEnum } from 'src/entityListener/enums';
import { ClassType } from 'src/entityListener/types';
import { PlatformEventClientService } from 'src/platformClient/platformEventClient/services';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  ObjectLiteral,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';

@EventSubscriber()
export abstract class EntityListener<T extends ClassType<unknown>> implements EntitySubscriberInterface<T> {
  constructor(
    private readonly platformClientEventService: PlatformEventClientService,
    private readonly prefix: string,
    private readonly excludedFields?: string[],
  ) {}

  abstract listenTo(): string | T;

  protected getEntityName(): string {
    const entityClass = this.listenTo();
    const entityName = typeof entityClass === 'string' ? entityClass : entityClass?.name;
    // Parse the name from camel case to Upper snake case e.g. fooBarEntity -> FOO_BAR_ENTITY
    const eventEntityName = map(snakeCase(entityName)?.split('_'), upperCase)?.join('_');
    // Remove the word entity from the name e.g FOO_ENTITY -> FOO
    return eventEntityName?.split('_')?.slice(0, -1)?.join('_');
  }
  /***
   * Remove all excluded fields and relational objects from the argument and keep only the primitive fields
   * @param {object} obj - Object to remove non primitive values from
   * @private {object}
   */
  private filterPayload(obj: ObjectLiteral): Record<string, unknown> {
    if (!obj) {
      return obj;
    }

    // Get all the keys of nested relational objects which have related Id field.
    const relationKeys = Object.keys(obj)
      .filter((i) => i.endsWith('Id'))
      .map((i) => i?.split('Id')[0]);
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (relationKeys.includes(key)) {
        return acc;
      }
      if (this.excludedFields && this.excludedFields.includes(key)) {
        return acc;
      }
      return {
        ...acc,
        [key]: value,
      };
    }, {});
  }

  private triggerEvent(
    eventType: EntityListenerEventTypeEnum,
    data: { current: ObjectLiteral; previous?: ObjectLiteral },
  ): void {
    const object = this.getEntityName();
    const id =  get(data, 'current.id');
    const eventPayload = {
      id,
      name: `${this.prefix}_${object}_${eventType}`,
      object: camelCase(object),
      data: {
        current: this.filterPayload(data?.current),
        previous: this.filterPayload(data?.previous),
      },
    };
    void this.platformClientEventService.trigger(eventPayload);
  }

  afterInsert(event: InsertEvent<T>): void {
    return this.triggerEvent(EntityListenerEventTypeEnum.INSERT, { previous: null, current: event.entity });
  }

  afterUpdate(event: UpdateEvent<T>): void {
    if(event.updatedColumns.length || event.updatedRelations.length){
      return this.triggerEvent(EntityListenerEventTypeEnum.UPDATE, {
        previous: event.databaseEntity,
        current: event.entity,
      });
    }
  }

  afterRemove(event: RemoveEvent<T>): void {
    return this.triggerEvent(EntityListenerEventTypeEnum.REMOVE, {
      previous: event.databaseEntity,
      current: event.entity,
    });
  }
}
