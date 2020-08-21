import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { <%= classifiedResourceName %> } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed'
  }
]

export class Seed<%= classifiedResourceName %><%= timestamped %> implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(<%= classifiedResourceName %>)
    const domain: Domain = await getRepository(Domain).findOne({
      name: 'SYSTEM'
    })

    return Promise.all(SEED.map(async <%= camelCaseResourceName %> => {
      await repository.save({
        ...<%= camelCaseResourceName %>,
        domain
      })
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(<%= classifiedResourceName %>)
    const domain: Domain = await getRepository(Domain).findOne({
      name: 'SYSTEM'
    })

    return Promise.all(SEED.reverse().map(async <%= camelCaseResourceName %> => {
      await repository.delete({ name: <%= camelCaseResourceName %>.name, domain })
    }))
  }
}
