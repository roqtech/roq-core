export type FileCreateParamsType = {
  fileName: string
  customMetaData?: Record<string, unknown>
  fileType: string
  fileAssociationOptions?: {
    entityIdentifier: string
    entityName: string
    fileId?: string
  }[]
  fileCategory: string
}
