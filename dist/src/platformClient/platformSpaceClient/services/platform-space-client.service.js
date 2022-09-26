"use strict";
var PlatformSpaceClientService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformSpaceClientService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const enums_1 = require("../../../library/enums");
const exception_1 = require("../../../library/exception");
const graphql_1 = require("../../../platformClient/platformSpaceClient/graphql");
const services_1 = require("../../../platformClient/services");
const nestjs_cls_1 = require("nestjs-cls");
let PlatformSpaceClientService = PlatformSpaceClientService_1 = class PlatformSpaceClientService {
    constructor(platformServiceAccountClientService, platformClientService, cls) {
        this.platformServiceAccountClientService = platformServiceAccountClientService;
        this.platformClientService = platformClientService;
        this.cls = cls;
    }
    static parseException(e) {
        return services_1.PlatformClientService.parseException(e, PlatformSpaceClientService_1.exceptionMapping);
    }
    getRequestServiceInstance() {
        const userToken = this.cls.get(enums_1.ClsKeyEnum.USER_TOKEN);
        if (userToken) {
            return this.platformClientService;
        }
        return this.platformServiceAccountClientService;
    }
    async createFile({ fileName, fileType, customMetaData, fileAssociationOptions = [], fileCategory, }) {
        const variables = {
            fileName,
            fileType,
            fileCategory,
            customMetaData,
            fileAssociationOptions,
        };
        try {
            return await this.getRequestServiceInstance().request({
                mutation: graphql_1.createFileUploadUrlMutation,
                variables,
            }, 'createFileUploadUrl');
        }
        catch (e) {
            throw PlatformSpaceClientService_1.parseException(e);
        }
    }
    async updateFileStatus(fileId, status) {
        const variables = {
            fileId,
            status,
        };
        try {
            return await this.getRequestServiceInstance().request({
                mutation: graphql_1.updateFileStatusMutation,
                variables,
            }, 'updateFileStatus');
        }
        catch (e) {
            throw PlatformSpaceClientService_1.parseException(e);
        }
    }
    async getFile(fileId) {
        const variables = { fileId };
        try {
            return await this.getRequestServiceInstance().request({
                query: graphql_1.fileQuery,
                variables,
            }, 'file');
        }
        catch (e) {
            throw PlatformSpaceClientService_1.parseException(e);
        }
    }
    async getFiles(args) {
        try {
            const fileModel = await this.getRequestServiceInstance().request({
                query: graphql_1.filesQuery,
                variables: args,
            }, 'files');
            return fileModel === null || fileModel === void 0 ? void 0 : fileModel.data;
        }
        catch (e) {
            throw PlatformSpaceClientService_1.parseException(e);
        }
    }
};
PlatformSpaceClientService.exceptionMapping = {
    [enums_1.ErrorCodeEnum.INVALID_CONTENT_TYPE_FOR_FILE_CATEGORY]: exception_1.InvalidContentTypeForFileCategoryException,
};
PlatformSpaceClientService = PlatformSpaceClientService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [services_1.PlatformServiceAccountClientService,
        services_1.PlatformClientService,
        nestjs_cls_1.ClsService])
], PlatformSpaceClientService);
exports.PlatformSpaceClientService = PlatformSpaceClientService;
