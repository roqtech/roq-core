"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("@roq/class-validator");
const argTypes_1 = require("../../library/argTypes");
let DeleteFilterArgType = class DeleteFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => argTypes_1.DeleteArgType, { nullable: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => argTypes_1.DeleteArgType),
    tslib_1.__metadata("design:type", argTypes_1.DeleteArgType)
], DeleteFilterArgType.prototype, "id", void 0);
DeleteFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], DeleteFilterArgType);
exports.DeleteFilterArgType = DeleteFilterArgType;
