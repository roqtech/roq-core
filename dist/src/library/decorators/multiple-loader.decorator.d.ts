import { BaseRepository } from '../repositories';
export declare const MultipleLoader: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | {
    repository: typeof BaseRepository<any>;
    relationProperty: string;
})[]) => ParameterDecorator;
