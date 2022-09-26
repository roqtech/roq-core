"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInviteTokenFragment = void 0;
const core_1 = require("@apollo/client/core");
exports.userInviteTokenFragment = (0, core_1.gql) `
    fragment UserInviteToken on UserTokenModel {
      id
      token
      type
      validTill
      userId
      createdAt
      updatedAt
    }
`;
