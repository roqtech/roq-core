import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', (_type) => Date)
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type';

  parseValue(value: string): Date {
    return new Date(value); // value from the client
  }

  serialize(value: Date): string {
    return new Date(value).toISOString(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    switch(ast.kind) {
      case Kind.INT:
      case Kind.STRING:
        return new Date(ast.value);
      default:
        return null;
    }
  }
}
