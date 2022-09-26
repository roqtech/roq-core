"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseUUIDStringPipe = void 0;
/* eslint-disable @roq/name-of-class-and-function-rule */
const common_1 = require("@nestjs/common");
const exception_1 = require("../exception");
class ParseUUIDStringPipe {
    constructor(opts) {
        this.builtInParseUUIDPipe = new common_1.ParseUUIDPipe(opts);
    }
    async transform(value, metadata) {
        try {
            return await this.builtInParseUUIDPipe.transform(value, metadata);
        }
        catch (e) {
            throw new exception_1.InvalidUUIDInputException();
        }
    }
}
exports.ParseUUIDStringPipe = ParseUUIDStringPipe;
