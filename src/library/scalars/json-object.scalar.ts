/* eslint max-classes-per-file: ["error", 2] */
import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ObjectValueNode, ValueNode } from 'graphql';
/* eslint-disable-next-line*/
export class JsonObject { }

// NOTE: implementation taken from here
// https://github.com/Urigo/graphql-scalars/tree/master/src/scalars/json

type CommonInterface = Record<string, unknown>;
type ParseLiteralReturnInterface = string | boolean | number | CommonInterface;
@Scalar('JsonObject', () => JsonObject)
export class JsonObjectScalar implements CustomScalar<unknown, unknown> {
  description = 'JSONObject custom scalar type';

  parseValue(value: CommonInterface): CommonInterface {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      throw new TypeError(`JSONObject cannot represent non-object value: ${value}`);
    }

    return value;
  }

  serialize(value: CommonInterface): CommonInterface {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      throw new TypeError(`JSONObject cannot represent non-object value: ${value}`);
    }
    return value;
  }

  parseObject(ast: ObjectValueNode, variables: { name?: string }): CommonInterface {
    const value = Object.create(null);

    ast.fields.forEach((field) => {
      value[field.name.value] = this.parseLiteral(field.value, variables);
    });

    return value;
  }

  parseLiteral(ast: ValueNode, variables: { name?: string }):
    ParseLiteralReturnInterface | ParseLiteralReturnInterface[] {
    switch (ast.kind) {
      case Kind.STRING:
      case Kind.BOOLEAN:
        return ast.value;
      case Kind.INT:
      case Kind.FLOAT:
        return parseFloat(ast.value);
      case Kind.OBJECT:
        return this.parseObject(ast, variables);
      case Kind.LIST:
        return ast.values.map((n) => this.parseLiteral(n, variables)) as ParseLiteralReturnInterface[];
      case Kind.NULL:
        return null;
      case Kind.VARIABLE: {
        const name = ast.name.value;
        return variables ? variables[name] : undefined;
      }
    }
  }
}
