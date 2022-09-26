"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerEventMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.triggerEventMutation = (0, core_1.gql) `
  mutation TriggerEvent($event: EventCreateDto!) {
    triggerEvent(event: $event)
  }
`;
