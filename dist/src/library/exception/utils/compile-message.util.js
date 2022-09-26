"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileHandleBarTemplate = exports.compileMessage = void 0;
const handlebars_1 = require("handlebars");
const compileMessage = (content, contentVars) => Object.keys(contentVars).reduce((acc, propName) => acc.replace(new RegExp(`{{${propName}}}`, 'g'), contentVars[propName]), content);
exports.compileMessage = compileMessage;
const compileHandleBarTemplate = (content, contentVars) => {
    const template = handlebars_1.default.compile(content);
    return template(contentVars);
};
exports.compileHandleBarTemplate = compileHandleBarTemplate;
