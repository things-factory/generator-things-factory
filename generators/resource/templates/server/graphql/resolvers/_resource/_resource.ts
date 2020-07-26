import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const <%= camelCaseResourceName %>Resolver = {
  async <%= camelCaseResourceName %>(_: any, { name }, context: any) {
    const repository = getRepository(<%= classifiedResourceName %>)

    return await repository.findOne({
      where: { domain: context.state.domain, name }, 
      relations: ['domain', 'creator', 'updater']
    })
  }
}

