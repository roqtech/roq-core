"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidContentTypeForFileCategoryException = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const enums_1 = require("../../library/enums");
const utils_1 = require("../../library/exception/utils");
const defaultMessage = 'Invalid contentType {{contentType}} against category {{fileCategory}}';
class InvalidContentTypeForFileCategoryException extends common_1.BadRequestException {
    constructor(error, description) {
        const { variables, message } = error;
        super((0, utils_1.prepareError)(defaultMessage, enums_1.ErrorCodeEnum.INVALID_CONTENT_TYPE_FOR_FILE_CATEGORY, {
            message,
            variables: Object.assign(Object.assign({}, variables), { extension: variables.contentType, fileCategoryName: (0, lodash_1.startCase)(variables.fileCategory.toLowerCase()) }),
        }), description);
    }
}
exports.InvalidContentTypeForFileCategoryException = InvalidContentTypeForFileCategoryException;
