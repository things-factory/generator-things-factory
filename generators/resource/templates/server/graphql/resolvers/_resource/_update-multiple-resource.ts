import { getRepository } from 'typeorm'
import { <%= classifiedResourceName %> } from '../../../entities'

export const updateMultiple<%= classifiedResourceName %> = {
    async updateMultiple<%= classifiedResourceName %>(_: any, { patches }, context: any) {
        let results = []
        const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
        const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
        const <%= camelCaseResourceName %>Repo = getRepository(<%= classifiedResourceName %>)
    
        if (_createRecords.length > 0) {
            for (let i = 0; i < _createRecords.length; i++) {
              const newRecord = _createRecords[i]
            }
      
              const result = await <%= camelCaseResourceName %>Repo.save({
                domain: context.state.domain,
                creator: context.state.user,
                updater: context.state.user,
                ...newRecord
              })
      
              results.push({ ...result, cuFlag: '+' })
        }

        if (_updateRecords.length > 0) {
            for (let i = 0; i < _updateRecords.length; i++) {
              const newRecord = _updateRecords[i]
              const <%= camelCaseResourceName %> = await <%= camelCaseResourceName %>Repo.findOne(newRecord.id)
      
              const result = await <%= camelCaseResourceName %>Repo.save({
                ...<%= camelCaseResourceName %>,
                ...newRecord,
                updater: context.state.user
              })
      
              results.push({ ...result, cuFlag: 'M' })
            }
        }
      
        return results
    }
}

