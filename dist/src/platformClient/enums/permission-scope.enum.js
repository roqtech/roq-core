"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionScopeEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PermissionScopeEnum;
(function (PermissionScopeEnum) {
    PermissionScopeEnum["own"] = "own";
    PermissionScopeEnum["all"] = "all";
    PermissionScopeEnum["userGroup"] = "userGroup";
})(PermissionScopeEnum = exports.PermissionScopeEnum || (exports.PermissionScopeEnum = {}));
(0, graphql_1.registerEnumType)(PermissionScopeEnum, {
    name: 'PermissionScopeEnum',
});
