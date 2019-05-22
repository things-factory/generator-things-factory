import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const <%= pluralCamelCaseRsourceName %>Resolver = {
  async <%= pluralCamelCaseRsourceName %>() {
    const repository = getRepository(<%= classifiedResourceName %>)

    return await repository.find()
  }
}
