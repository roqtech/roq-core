"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let BaseArgType = class BaseArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], BaseArgType.prototype, "limit", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], BaseArgType.prototype, "offset", void 0);
BaseArgType = tslib_1.__decorate([
    (0, graphql_1.ArgsType)()
], BaseArgType);
exports.BaseArgType = BaseArgType;
