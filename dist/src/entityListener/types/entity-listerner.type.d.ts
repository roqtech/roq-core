import { ClassType } from '../../entityListener/types';
export declare type EntityListenerType = {
    entity: ClassType<unknown>;
    excludedFields?: string[];
};
