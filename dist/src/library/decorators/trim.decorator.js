"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trim = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
/**
 * Trims the original value
 */
const Trim = () => (0, common_1.applyDecorators)((0, class_transformer_1.Transform)((arg) => {
    var _a, _b, _c, _d;
    if (typeof arg === 'object' && arg.value !== undefined) {
        return typeof arg.value === 'string' ? (_b = (_a = arg === null || arg === void 0 ? void 0 : arg.value) === null || _a === void 0 ? void 0 : _a.trim) === null || _b === void 0 ? void 0 : _b.call(_a) : arg.value;
    }
    else if (typeof arg === 'string') {
        return (_d = (_c = arg).trim) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
    return arg;
}));
exports.Trim = Trim;
