"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVars = void 0;
// eslint-disable-next-line @roq/filename-suffix-mismatch
const lodash_1 = require("lodash");
const protected_vars_util_1 = require("./protected-vars.util");
const filterVariables = (env) => {
    if (!(0, lodash_1.isObject)(env)) {
        return env;
    }
    Object.keys(env).forEach((key) => {
        if (check(key)) {
            env[key] = mask(env[key]);
        }
    });
    return env;
};
function check(str) {
    const re = new RegExp(protected_vars_util_1.protectedVars.map((el) => `${el}\\b`).join('|'));
    return re.test(str);
}
function mask(value) {
    let range = Math.floor(value.length / 3);
    if (range < 1) {
        return value;
    }
    if (range > 15) {
        range = 15;
    }
    return value.slice(0, range) + '***' + value.slice(-range);
}
function getEnvVars() {
    return filterVariables(process.env);
}
exports.getEnvVars = getEnvVars;
