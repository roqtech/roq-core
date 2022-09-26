"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorEnum = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const graphql_1 = require("@nestjs/graphql");
var OperatorEnum;
(function (OperatorEnum) {
    OperatorEnum["equalTo"] = "=";
    OperatorEnum["notEqualTo"] = "!=";
    OperatorEnum["moreThan"] = ">";
    OperatorEnum["lessThan"] = "<";
    OperatorEnum["moreThanEqual"] = ">=";
    OperatorEnum["lessThanEqual"] = "<=";
    OperatorEnum["valueIn"] = "IN";
    OperatorEnum["valueNotIn"] = "NOT IN";
    OperatorEnum["like"] = "like";
    OperatorEnum["iLike"] = "iLike";
})(OperatorEnum = exports.OperatorEnum || (exports.OperatorEnum = {}));
(0, graphql_1.registerEnumType)(OperatorEnum, {
    name: 'OperatorEnum',
});
