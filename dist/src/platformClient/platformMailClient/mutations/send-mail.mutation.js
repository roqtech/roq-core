"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailMutation = void 0;
const core_1 = require("@apollo/client/core");
exports.sendMailMutation = (0, core_1.gql) `
  mutation sendMail($payload: MailSendDto!) {
    sendMail(params: $payload)
  }
`;
