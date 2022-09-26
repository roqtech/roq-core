"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityListenerEventTypeEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var EntityListenerEventTypeEnum;
(function (EntityListenerEventTypeEnum) {
    EntityListenerEventTypeEnum["INSERT"] = "INSERT";
    EntityListenerEventTypeEnum["UPDATE"] = "UPDATE";
    EntityListenerEventTypeEnum["REMOVE"] = "REMOVE";
})(EntityListenerEventTypeEnum = exports.EntityListenerEventTypeEnum || (exports.EntityListenerEventTypeEnum = {}));
(0, graphql_1.registerEnumType)(EntityListenerEventTypeEnum, {
    name: 'EntityListenerEventTypeEnum',
});
