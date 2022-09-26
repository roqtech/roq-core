"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBulkFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("@roq/class-validator");
const argTypes_1 = require("../../library/argTypes");
let BaseBulkFilterArgType = class BaseBulkFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => argTypes_1.IdBulkFilterArgType, { nullable: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => argTypes_1.IdBulkFilterArgType),
    tslib_1.__metadata("design:type", argTypes_1.IdBulkFilterArgType)
], BaseBulkFilterArgType.prototype, "id", void 0);
BaseBulkFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], BaseBulkFilterArgType);
exports.BaseBulkFilterArgType = BaseBulkFilterArgType;
