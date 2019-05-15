import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const createCommonCodeDetail = {
  async createCommonCodeDetail(_, { commonCodeDetail: attrs }) {
    const repository = getRepository(CommonCodeDetail)
    const newCommonCodeDetail = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newCommonCodeDetail)
  }
}
