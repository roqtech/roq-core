"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("@roq/class-validator");
let DeleteArgType = class DeleteArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], DeleteArgType.prototype, "equalTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID], { nullable: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsUUID)('all', { each: true }),
    tslib_1.__metadata("design:type", Array)
], DeleteArgType.prototype, "valueIn", void 0);
DeleteArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], DeleteArgType);
exports.DeleteArgType = DeleteArgType;
