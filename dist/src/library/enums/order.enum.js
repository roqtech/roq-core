"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["ASC"] = "ASC";
    OrderEnum["DESC"] = "DESC";
})(OrderEnum = exports.OrderEnum || (exports.OrderEnum = {}));
(0, graphql_1.registerEnumType)(OrderEnum, {
    name: 'OrderEnum',
});
