"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanFilterArgType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let BooleanFilterArgType = class BooleanFilterArgType {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], BooleanFilterArgType.prototype, "equalTo", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], BooleanFilterArgType.prototype, "notEqualTo", void 0);
BooleanFilterArgType = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], BooleanFilterArgType);
exports.BooleanFilterArgType = BooleanFilterArgType;
