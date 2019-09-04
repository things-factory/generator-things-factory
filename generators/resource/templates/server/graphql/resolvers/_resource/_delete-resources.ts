import { getRepository, In } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const delete<%= pluralClassifiedResourceName %> = {
  async delete<%= pluralClassifiedResourceName %>(_: any, { names }, context: any) {
    await getRepository(<%= classifiedResourceName %>).delete({ 
        domain: context.state.domain,
        name: In(names)
    })
    return true
  }
}

