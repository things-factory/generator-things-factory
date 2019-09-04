import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const <%= pluralCamelCaseResourceName %>Resolver = {
  async <%= pluralCamelCaseResourceName %>(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(<%= classifiedResourceName %>).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  }
}