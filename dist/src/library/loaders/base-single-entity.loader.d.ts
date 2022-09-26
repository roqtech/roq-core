import { ModuleRef } from '@nestjs/core';
import * as DataLoader from 'dataloader';
import { QueryInterface } from '../../library/interfaces';
import { BaseRepository } from '../../library/repositories';
export declare class BaseSingleEntityLoader<T> {
    private readonly moduleRef;
    protected readonly relationProperty = "id";
    constructor(moduleRef: ModuleRef);
    generateDataLoader(repository: BaseRepository<T>): DataLoader<QueryInterface, T>;
}
