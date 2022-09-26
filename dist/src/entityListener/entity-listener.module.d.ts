import { DynamicModule } from '@nestjs/common';
import { EntityListenerOptionsInterface } from '../entityListener/interfaces';
import { EntityListenerType } from '../entityListener/types';
export declare class EntityListenerModule {
    static register(entitiesListeners: EntityListenerType[]): DynamicModule;
    static registerAsync(options: EntityListenerOptionsInterface[]): DynamicModule;
}
