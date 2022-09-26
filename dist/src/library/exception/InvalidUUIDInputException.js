"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUUIDInputException = void 0;
/* eslint-disable @roq/name-of-class-and-function-rule, @roq/filename-suffix-mismatch, @roq/no-invalid-filename-chars */
const common_1 = require("@nestjs/common");
const class_validator_1 = require("@roq/class-validator");
const utils_1 = require("../../library/exception/utils");
const defaultMessage = 'Provided argument should have been a valid uuid';
class InvalidUUIDInputException extends common_1.BadRequestException {
    constructor(error, description) {
        super((0, utils_1.prepareError)(defaultMessage, class_validator_1.ClassValidatorEnum.INVALID_UUID, error), description);
    }
}
exports.InvalidUUIDInputException = InvalidUUIDInputException;
