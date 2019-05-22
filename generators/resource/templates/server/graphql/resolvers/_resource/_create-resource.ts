import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const create<%= classifiedResourceName %> = {
  async create<%= classifiedResourceName %>(_, { <%= camelCaseResourceName %>: attrs }) {
    const repository = getRepository(<%= classifiedResourceName %>)
    const new<%= classifiedResourceName %> = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(new<%= classifiedResourceName %>)
  }
}
