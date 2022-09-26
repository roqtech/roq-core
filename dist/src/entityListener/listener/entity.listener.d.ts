import { ClassType } from '../../entityListener/types';
import { PlatformEventClientService } from '../../platformClient/platformEventClient/services';
import { EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';
export declare abstract class EntityListener<T extends ClassType<unknown>> implements EntitySubscriberInterface<T> {
    private readonly platformClientEventService;
    private readonly prefix;
    private readonly excludedFields?;
    constructor(platformClientEventService: PlatformEventClientService, prefix: string, excludedFields?: string[]);
    abstract listenTo(): string | T;
    protected getEntityName(): string;
    /***
     * Remove all excluded fields and relational objects from the argument and keep only the primitive fields
     * @param {object} obj - Object to remove non primitive values from
     * @private {object}
     */
    private filterPayload;
    private triggerEvent;
    afterInsert(event: InsertEvent<T>): void;
    afterUpdate(event: UpdateEvent<T>): void;
    afterRemove(event: RemoveEvent<T>): void;
}
