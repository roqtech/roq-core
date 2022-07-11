import { FileStatusEnum } from '../enums'
import { FileAssociationType } from './file-association.type'

export type FileResponseType = {
  id: string
  status: FileStatusEnum
  createdByUserId?: string
  name: string
  path: string
  size: number
  customMetaData: Record<string, unknown>
  contentType: string
  createdAt?: Date
  updatedAt?: Date
  url?: string
  uploadUrl?: string
  isPublic: boolean
  fileAssociations: {
    totalCount: number
    data: FileAssociationType[]
  }
}
