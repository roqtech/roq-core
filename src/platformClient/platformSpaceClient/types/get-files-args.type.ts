import { IdFilterArgType, StringFilterArgType, OrderEnum } from '../../../library'
import { FileOrderSortEnum } from '../enums'

export type GetFilesArgsType = {
  entityIdentifiers: IdFilterArgType
  entityName: {
    equalTo?: string
  }
  fileCategory: StringFilterArgType
  status: StringFilterArgType
  order?: {
    order: OrderEnum
    sort: FileOrderSortEnum
  }
  limit?: number
}
