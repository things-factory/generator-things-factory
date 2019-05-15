import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CommonCodeDetail } from './common-code-detail'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('common-codes')
@Index('ix_common_code_0', (commonCode: CommonCode) => [commonCode.domain, commonCode.name], { unique: true })
@Index('ix_common_code_1', (commonCode: CommonCode) => [commonCode.domain, commonCode.bundle])
export class CommonCode extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @Column('text')
  bundle: string

  @OneToMany(type => CommonCodeDetail, commonCodeDetail => commonCodeDetail.parent)
  details: CommonCodeDetail[]
}
