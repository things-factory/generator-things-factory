import { getRepository } from 'typeorm'
import { CommonCodeDetail } from '../../../entities'

export const deleteCommonCodeDetail = {
  async deleteCommonCodeDetail(_, { id }) {
    const repository = getRepository(CommonCodeDetail)

    return await repository.delete(id)
  }
}
