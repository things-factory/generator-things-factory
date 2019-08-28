import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const update<%= classifiedResourceName %> = {
  async update<%= classifiedResourceName %>(_: any, { name, patch }, context: any) {
    const repository = getRepository(<%= classifiedResourceName %>)
    const <%= camelCaseResourceName %> = await repository.findOne({ 
      where: { domain: context.domain, name }
    })

    return await repository.save({
      ...<%= camelCaseResourceName %>,
      ...patch,
      updater: context.state.user
    })
  }
}