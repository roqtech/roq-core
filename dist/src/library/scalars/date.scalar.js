"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateScalar = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
let DateScalar = class DateScalar {
    constructor() {
        this.description = 'Date custom scalar type';
    }
    parseValue(value) {
        return new Date(value); // value from the client
    }
    serialize(value) {
        return new Date(value).toISOString(); // value sent to the client
    }
    parseLiteral(ast) {
        switch (ast.kind) {
            case graphql_2.Kind.INT:
            case graphql_2.Kind.STRING:
                return new Date(ast.value);
            default:
                return null;
        }
    }
};
DateScalar = tslib_1.__decorate([
    (0, graphql_1.Scalar)('Date', (_type) => Date)
], DateScalar);
exports.DateScalar = DateScalar;
