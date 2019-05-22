import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const <%= pluralCamelCaseResourceName %>Resolver = {
  async <%= pluralCamelCaseResourceName %>() {
    const repository = getRepository(<%= classifiedResourceName %>)

    return await repository.find()
  }
}
