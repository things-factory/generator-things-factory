import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { <%= classifiedResourceName %> } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed'
  }
]

export class Seed<%= classifiedResourceName %>1556863924822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(<%= classifiedResourceName %>)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async <%= camelCaseResourceName %> => {
        await repository.save({
          ...<%= camelCaseResourceName %>,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(<%= classifiedResourceName %>)
    SEED.reverse().forEach(async <%= camelCaseResourceName %> => {
      let record = await repository.findOne({ name: <%= camelCaseResourceName %>.name })
      await repository.remove(record)
    })
  }
}
