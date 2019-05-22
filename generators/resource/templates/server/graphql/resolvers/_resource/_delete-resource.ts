import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const delete<%= classifiedResourceName %> = {
  async delete<%= classifiedResourceName %>(_, { id }) {
    const repository = getRepository(<%= classifiedResourceName %>)

    return await repository.delete(id)
  }
}
