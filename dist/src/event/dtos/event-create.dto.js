"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateDto = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("@roq/class-validator");
const scalars_1 = require("../../library/scalars");
let EventCreateDto = class EventCreateDto {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], EventCreateDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], EventCreateDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], EventCreateDto.prototype, "object", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => scalars_1.JsonObject, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], EventCreateDto.prototype, "data", void 0);
EventCreateDto = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], EventCreateDto);
exports.EventCreateDto = EventCreateDto;
