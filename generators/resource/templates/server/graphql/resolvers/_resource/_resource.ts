import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const <%= camelCaseResourceName %>Resolver = {
  async <%= camelCaseResourceName %>(_, { id }, context, info) {
    const repository = getRepository(<%= classifiedResourceName %>)

    return await repository.findOne(
      { id }
    )
  }
}
