import { FileStatusEnum } from '../../../platformClient/platformSpaceClient/enums';
import { FileCreateParamsType, FileResponseType, GetFilesArgsType } from '../../../platformClient/platformSpaceClient/types';
import { PlatformClientService, PlatformServiceAccountClientService } from '../../../platformClient/services';
import { ClsService } from 'nestjs-cls';
export declare class PlatformSpaceClientService {
    protected readonly platformServiceAccountClientService: PlatformServiceAccountClientService;
    protected readonly platformClientService: PlatformClientService;
    protected readonly cls: ClsService;
    private static exceptionMapping;
    constructor(platformServiceAccountClientService: PlatformServiceAccountClientService, platformClientService: PlatformClientService, cls: ClsService);
    private static parseException;
    private getRequestServiceInstance;
    createFile({ fileName, fileType, customMetaData, fileAssociationOptions, fileCategory, }: FileCreateParamsType): Promise<FileResponseType>;
    updateFileStatus(fileId: string, status: FileStatusEnum): Promise<FileResponseType>;
    getFile(fileId: string): Promise<FileResponseType>;
    getFiles(args: GetFilesArgsType): Promise<FileResponseType[]>;
}
