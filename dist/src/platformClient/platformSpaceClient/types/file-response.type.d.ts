import { FileStatusEnum } from '../../../platformClient/platformSpaceClient/enums';
import { FileAssociationType } from '../../../platformClient/platformSpaceClient/types';
export declare type FileResponseType = {
    id: string;
    status: FileStatusEnum;
    createdByUserId?: string;
    name: string;
    path: string;
    size: number;
    customMetaData: Record<string, unknown>;
    contentType: string;
    createdAt?: Date;
    updatedAt?: Date;
    url?: string;
    uploadUrl?: string;
    isPublic: boolean;
    fileAssociations: {
        totalCount: number;
        data: FileAssociationType[];
    };
};
