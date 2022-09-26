"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
// eslint-disable-next-line @roq/filename-suffix-mismatch
const common_1 = require("@nestjs/common");
class Logger extends common_1.Logger {
    log(message, context) {
        super.log(message, context);
    }
    error(message, stack, context) {
        super.error(message, stack, context);
    }
}
exports.Logger = Logger;
