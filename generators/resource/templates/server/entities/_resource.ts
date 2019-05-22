import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('<%= pluralResourceName %>')
@Index('ix_<%= resourceName %>_0', (<%= camelCaseResourceName %>: <%= classifiedResourceName %>) => [<%= camelCaseResourceName %>.domain, <%= camelCaseResourceName %>.name], { unique: true })
export class <%= classifiedResourceName %> extends DomainBaseEntity {
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
}
