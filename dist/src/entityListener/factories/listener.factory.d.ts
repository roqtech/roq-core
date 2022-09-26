import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { ConfigService } from '@nestjs/config';
import { EntityListenerOptionsInterface } from '../../entityListener/interfaces';
import { ClassType, EntityListenerType } from '../../entityListener/types';
import { PlatformEventClientService } from '../../platformClient/platformEventClient/services';
import { Connection, EntitySubscriberInterface } from 'typeorm';
export declare class ListenerFactory {
    private readonly connection;
    private readonly platformClientEventService;
    private readonly configService;
    constructor(connection: Connection, platformClientEventService: PlatformEventClientService, configService: ConfigService);
    createListener(entityClass: ClassType<unknown>, excludedFields?: string[]): EntitySubscriberInterface;
    static generateProviders(entitiesListeners: EntityListenerType[]): Provider[];
    static generateAsyncProviders(option: EntityListenerOptionsInterface): Provider[];
}
