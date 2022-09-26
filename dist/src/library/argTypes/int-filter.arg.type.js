"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let IntFilterArgType = class IntFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IntFilterArgType.prototype, "equalTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IntFilterArgType.prototype, "notEqualTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IntFilterArgType.prototype, "moreThan", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IntFilterArgType.prototype, "lessThan", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IntFilterArgType.prototype, "moreThanEqual", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    tslib_1.__metadata("design:type", Number)
], IntFilterArgType.prototype, "lessThanEqual", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Int], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], IntFilterArgType.prototype, "valueNotIn", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Int], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], IntFilterArgType.prototype, "valueIn", void 0);
IntFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], IntFilterArgType);
exports.IntFilterArgType = IntFilterArgType;
