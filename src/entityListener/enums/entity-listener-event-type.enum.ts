import { registerEnumType } from '@nestjs/graphql';

export enum EntityListenerEventTypeEnum {
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  REMOVE = 'REMOVE',
}

registerEnumType(EntityListenerEventTypeEnum, {
  name: 'EntityListenerEventTypeEnum',
});
