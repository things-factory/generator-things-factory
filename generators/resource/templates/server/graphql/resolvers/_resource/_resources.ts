import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const <%= pluralCamelCaseResourceName %>Resolver = {
  async <%= pluralCamelCaseResourceName %>(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(<%= classifiedResourceName %>).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}