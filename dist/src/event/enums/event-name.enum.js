"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNameEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var EventNameEnum;
(function (EventNameEnum) {
    EventNameEnum["USER_LOGIN_SYNC"] = "USER_LOGIN_SYNC";
})(EventNameEnum = exports.EventNameEnum || (exports.EventNameEnum = {}));
(0, graphql_1.registerEnumType)(EventNameEnum, {
    name: 'EventNameEnum',
});
