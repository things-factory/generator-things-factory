import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const update<%= classifiedResourceName %> = {
  async update<%= classifiedResourceName %>(_, { id, patch }) {
    const repository = getRepository(<%= classifiedResourceName %>)

    const commonCode = await repository.findOne({ id })

    return await repository.save({
      ...commonCode,
      ...patch
    })
  }
}
