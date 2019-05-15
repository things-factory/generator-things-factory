import { commonCodeDetailResolver } from './common-code-detail'
import { commonCodeDetailsResolver } from './common-code-details'

import { updateCommonCodeDetail } from './update-common-code-detail'
import { createCommonCodeDetail } from './create-common-code-detail'
import { deleteCommonCodeDetail } from './delete-common-code-detail'

export const Query = {
  ...commonCodeDetailsResolver,
  ...commonCodeDetailResolver
}

export const Mutation = {
  ...updateCommonCodeDetail,
  ...createCommonCodeDetail,
  ...deleteCommonCodeDetail
}
