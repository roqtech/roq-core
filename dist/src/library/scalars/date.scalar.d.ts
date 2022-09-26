import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class DateScalar implements CustomScalar<string, Date> {
    description: string;
    parseValue(value: string): Date;
    serialize(value: Date): string;
    parseLiteral(ast: ValueNode): Date;
}
