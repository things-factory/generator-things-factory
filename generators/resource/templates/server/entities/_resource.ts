import { CreateDateColumn, UpdateDateColumn, Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'

@Entity('<%= pluralResourceName %>')
@Index('ix_<%= resourceName %>_0', (<%= camelCaseResourceName %>: <%= classifiedResourceName %>) => [<%= camelCaseResourceName %>.domain, <%= camelCaseResourceName %>.name], { unique: true })
export class <%= classifiedResourceName %> {
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

  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
  
  @ManyToOne(type => User)
  creator: User
  
  @ManyToOne(type => User)
  updater: User  
}
