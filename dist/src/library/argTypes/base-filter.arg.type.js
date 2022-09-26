"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("@roq/class-validator");
const argTypes_1 = require("../../library/argTypes");
let BaseFilterArgType = class BaseFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => argTypes_1.IdFilterArgType, { nullable: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => argTypes_1.IdFilterArgType),
    tslib_1.__metadata("design:type", argTypes_1.IdFilterArgType)
], BaseFilterArgType.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => argTypes_1.DateFilterArgType, { nullable: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => argTypes_1.DateFilterArgType),
    tslib_1.__metadata("design:type", argTypes_1.DateFilterArgType)
], BaseFilterArgType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => argTypes_1.DateFilterArgType, { nullable: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => argTypes_1.DateFilterArgType),
    tslib_1.__metadata("design:type", argTypes_1.DateFilterArgType)
], BaseFilterArgType.prototype, "updatedAt", void 0);
BaseFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], BaseFilterArgType);
exports.BaseFilterArgType = BaseFilterArgType;
