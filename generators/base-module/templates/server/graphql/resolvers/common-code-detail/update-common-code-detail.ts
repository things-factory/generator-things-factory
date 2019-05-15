import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const updateCommonCodeDetail = {
  async updateCommonCodeDetail(_, { id, patch }) {
    const repository = getRepository(CommonCodeDetail)

    const commonCodeDetail = await repository.findOne(
      { id }
    )

    return await repository.save({
      ...commonCodeDetail,
      ...patch
    })
  }
}
