"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonObjectScalar = exports.JsonObject = void 0;
const tslib_1 = require("tslib");
/* eslint max-classes-per-file: ["error", 2] */
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
/* eslint-disable-next-line*/
class JsonObject {
}
exports.JsonObject = JsonObject;
let JsonObjectScalar = class JsonObjectScalar {
    constructor() {
        this.description = 'JSONObject custom scalar type';
    }
    parseValue(value) {
        if (typeof value !== 'object' || value === null || Array.isArray(value)) {
            throw new TypeError(`JSONObject cannot represent non-object value: ${value}`);
        }
        return value;
    }
    serialize(value) {
        if (typeof value !== 'object' || value === null || Array.isArray(value)) {
            throw new TypeError(`JSONObject cannot represent non-object value: ${value}`);
        }
        return value;
    }
    parseObject(ast, variables) {
        const value = Object.create(null);
        ast.fields.forEach((field) => {
            value[field.name.value] = this.parseLiteral(field.value, variables);
        });
        return value;
    }
    parseLiteral(ast, variables) {
        switch (ast.kind) {
            case graphql_2.Kind.STRING:
            case graphql_2.Kind.BOOLEAN:
                return ast.value;
            case graphql_2.Kind.INT:
            case graphql_2.Kind.FLOAT:
                return parseFloat(ast.value);
            case graphql_2.Kind.OBJECT:
                return this.parseObject(ast, variables);
            case graphql_2.Kind.LIST:
                return ast.values.map((n) => this.parseLiteral(n, variables));
            case graphql_2.Kind.NULL:
                return null;
            case graphql_2.Kind.VARIABLE: {
                const name = ast.name.value;
                return variables ? variables[name] : undefined;
            }
        }
    }
};
JsonObjectScalar = tslib_1.__decorate([
    (0, graphql_1.Scalar)('JsonObject', () => JsonObject)
], JsonObjectScalar);
exports.JsonObjectScalar = JsonObjectScalar;
