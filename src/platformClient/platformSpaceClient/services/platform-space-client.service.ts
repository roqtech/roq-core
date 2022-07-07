import { BadRequestException, Injectable } from '@nestjs/common';
import { ErrorCodeEnum } from 'src/library/enums';
import { InvalidContentTypeForFileCategoryException } from 'src/library/exception';
import { FileStatusEnum } from 'src/platformClient/platformSpaceClient/enums';
import {
  createFileUploadUrlMutation,
  fileQuery,
  filesQuery,
  updateFileStatusMutation,
} from 'src/platformClient/platformSpaceClient/graphql';
import { FileCreateParamsType, FileResponseType, GetFilesArgsType } from 'src/platformClient/platformSpaceClient/types';
import { PlatformClientService } from 'src/platformClient/services';
import { ExceptionMappingType } from 'src/platformClient/types';

@Injectable()
export class PlatformSpaceClientService {
  private static exceptionMapping: ExceptionMappingType = {
    [ErrorCodeEnum.INVALID_CONTENT_TYPE_FOR_FILE_CATEGORY]: InvalidContentTypeForFileCategoryException,
  };

  constructor(private readonly platformClientService: PlatformClientService) { }

  private static parseException(e): BadRequestException {
    return PlatformClientService.parseException(e, PlatformSpaceClientService.exceptionMapping);
  }

  async createFile({
    fileName,
    fileType,
    customMetaData,
    fileAssociationOptions = [],
    fileCategory,
  }: FileCreateParamsType): Promise<FileResponseType> {
    const variables = {
      fileName,
      fileType,
      fileCategory,
      customMetaData,
      fileAssociationOptions,
    };

    try {
      return await this.platformClientService.request<FileResponseType>(
        {
          mutation: createFileUploadUrlMutation,
          variables,
        },
        'createFileUploadUrl',
      );
    } catch (e) {
      throw PlatformSpaceClientService.parseException(e);
    }
  }

  async updateFileStatus(fileId: string, status: FileStatusEnum): Promise<FileResponseType> {
    const variables = {
      fileId,
      status,
    };
    try {
      return await this.platformClientService.request<FileResponseType>(
        {
          mutation: updateFileStatusMutation,
          variables,
        },
        'updateFileStatus',
      );
    } catch (e) {
      throw PlatformSpaceClientService.parseException(e);
    }
  }

  async getFile(fileId: string): Promise<FileResponseType> {
    const variables = { fileId };
    try {
      return await this.platformClientService.request<FileResponseType>(
        {
          query: fileQuery,
          variables,
        },
        'file',
      );
    } catch (e) {
      throw PlatformSpaceClientService.parseException(e);
    }
  }

  async getFiles(args: GetFilesArgsType): Promise<FileResponseType[]> {
    try {
      const fileModel = await this.platformClientService.request<{ data: FileResponseType[] }>(
        {
          query: filesQuery,
          variables: args,
        },
        'files',
      );

      return fileModel?.data;
    } catch (e) {
      throw PlatformSpaceClientService.parseException(e);
    }
  }
}
