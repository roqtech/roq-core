import { CustomScalar } from '@nestjs/graphql';
import { ObjectValueNode, ValueNode } from 'graphql';
export declare class JsonObject {
}
declare type CommonInterface = Record<string, unknown>;
declare type ParseLiteralReturnInterface = string | boolean | number | CommonInterface;
export declare class JsonObjectScalar implements CustomScalar<unknown, unknown> {
    description: string;
    parseValue(value: CommonInterface): CommonInterface;
    serialize(value: CommonInterface): CommonInterface;
    parseObject(ast: ObjectValueNode, variables: {
        name?: string;
    }): CommonInterface;
    parseLiteral(ast: ValueNode, variables: {
        name?: string;
    }): ParseLiteralReturnInterface | ParseLiteralReturnInterface[];
}
export {};
