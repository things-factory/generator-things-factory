import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const delete<%= classifiedResourceName %> = {
  async delete<%= classifiedResourceName %>(_: any, { name }, context: any) {
    await getRepository(<%= classifiedResourceName %>).delete({ domain: context.domain, name })
    return true
  }
}

