import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const <%= camelCaseResourceName %>Resolver = {
  async <%= camelCaseResourceName %>(_: any, { name }, context: any) {
    const repository = getRepository(<%= classifiedResourceName %>)

    return await getRepository(<%= classifiedResourceName %>).findOne({
      where: { domain: context.domain, name, relations: ['domain', 'creator', 'updater']}
    })
  }
}

