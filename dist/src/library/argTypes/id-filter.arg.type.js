"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let IdFilterArgType = class IdFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], IdFilterArgType.prototype, "equalTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    tslib_1.__metadata("design:type", String)
], IdFilterArgType.prototype, "notEqualTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], IdFilterArgType.prototype, "valueNotIn", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], IdFilterArgType.prototype, "valueIn", void 0);
IdFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], IdFilterArgType);
exports.IdFilterArgType = IdFilterArgType;
