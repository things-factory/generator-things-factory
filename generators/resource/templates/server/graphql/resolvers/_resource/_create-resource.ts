import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const create<%= classifiedResourceName %> = {
  async create<%= classifiedResourceName %>(_: any, { <%= camelCaseResourceName %>}, context: any) {
    return await getRepository(<%= classifiedResourceName %>).save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...<%= camelCaseResourceName %>

    })
  }
}

