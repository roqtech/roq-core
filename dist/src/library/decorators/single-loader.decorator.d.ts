import { BaseRepository } from '../repositories';
export declare const SingleLoader: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | {
    new (): BaseRepository<any>;
})[]) => ParameterDecorator;
