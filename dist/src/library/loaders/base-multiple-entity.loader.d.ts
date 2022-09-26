import * as DataLoader from 'dataloader';
import { BaseRepository } from '../../library/repositories';
import { ArrayLoaderResponseInterface, QueryInterface } from '../interfaces';
export declare class BaseMultipleEntityLoader<T> {
    generateDataLoader(repository: BaseRepository<T>, relationProperty: string): DataLoader<QueryInterface, ArrayLoaderResponseInterface<T>>;
}
