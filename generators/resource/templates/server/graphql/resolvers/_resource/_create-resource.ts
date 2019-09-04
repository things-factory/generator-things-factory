import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const create<%= classifiedResourceName %> = {
  async create<%= classifiedResourceName %>(_: any, { <%= camelCaseResourceName %>}, context: any) {
    return await getRepository(<%= classifiedResourceName %>).save({
      ...<%= camelCaseResourceName %>,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

