"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("@roq/class-validator");
let DateFilterArgType = class DateFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    tslib_1.__metadata("design:type", Date)
], DateFilterArgType.prototype, "moreThan", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    tslib_1.__metadata("design:type", Date)
], DateFilterArgType.prototype, "lessThan", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    tslib_1.__metadata("design:type", Date)
], DateFilterArgType.prototype, "moreThanEqual", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    tslib_1.__metadata("design:type", Date)
], DateFilterArgType.prototype, "lessThanEqual", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, class_validator_1.IsEmpty)(),
    tslib_1.__metadata("design:type", Date)
], DateFilterArgType.prototype, "equalTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, class_validator_1.IsEmpty)(),
    tslib_1.__metadata("design:type", Date)
], DateFilterArgType.prototype, "notEqualTo", void 0);
DateFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], DateFilterArgType);
exports.DateFilterArgType = DateFilterArgType;
