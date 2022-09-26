"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let StringFilterArgType = class StringFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterArgType.prototype, "equalTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterArgType.prototype, "notEqualTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], StringFilterArgType.prototype, "valueNotIn", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], StringFilterArgType.prototype, "valueIn", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterArgType.prototype, "like", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], StringFilterArgType.prototype, "iLike", void 0);
StringFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], StringFilterArgType);
exports.StringFilterArgType = StringFilterArgType;
