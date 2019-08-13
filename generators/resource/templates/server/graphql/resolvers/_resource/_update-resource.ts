import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const update<%= classifiedResourceName %> = {
  async update<%= classifiedResourceName %>(_: any, { name, patch }) {
    const repository = getRepository(<%= classifiedResourceName %>)
    const <%= camelCaseResourceName %> = await repository.findOne({ name })

    return await repository.save({
      ...<%= camelCaseResourceName %>,
      ...patch,
      updaterId: context.state.user.name
    })
  }
}