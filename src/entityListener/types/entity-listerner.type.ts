import { ClassType } from 'src/entityListener/types';

export type EntityListenerType = { entity: ClassType<unknown>, excludedFields?: string[] };
