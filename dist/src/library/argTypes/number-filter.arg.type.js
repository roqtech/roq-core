"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let NumberFilterArgType = class NumberFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterArgType.prototype, "equalTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterArgType.prototype, "notEqualTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterArgType.prototype, "moreThan", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterArgType.prototype, "lessThan", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterArgType.prototype, "moreThanEqual", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], NumberFilterArgType.prototype, "lessThanEqual", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Float], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], NumberFilterArgType.prototype, "valueNotIn", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Float], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], NumberFilterArgType.prototype, "valueIn", void 0);
NumberFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], NumberFilterArgType);
exports.NumberFilterArgType = NumberFilterArgType;
