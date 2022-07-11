import { registerEnumType } from '@nestjs/graphql';
export enum PermissionScopeEnum {
  own = 'own',
  all = 'all',
  userGroup = 'userGroup',
}
registerEnumType(PermissionScopeEnum, {
  name: 'PermissionScopeEnum',
});
