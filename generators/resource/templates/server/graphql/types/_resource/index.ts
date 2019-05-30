import { <%= classifiedResourceName %> } from './<%= resourceName %>'
import { New<%= classifiedResourceName %> } from './new-<%= resourceName %>'
import { <%= classifiedResourceName %>Patch } from './<%= resourceName %>-patch'
import { <%= classifiedResourceName %>List } from './<%= resourceName %>-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  create<%= classifiedResourceName %> (
    <%= camelCaseResourceName %>: New<%= classifiedResourceName %>!
  ): <%= classifiedResourceName %>

  update<%= classifiedResourceName %> (
    id: String!
    patch: <%= classifiedResourceName %>Patch!
  ): <%= classifiedResourceName %>

  delete<%= classifiedResourceName %> (
    id: String!
  ): <%= classifiedResourceName %>

  publish<%= classifiedResourceName %> (
    id: String!
  ): <%= classifiedResourceName %>
`

export const Query = `
  <%= pluralCamelCaseResourceName %>(filters: [Filter], pagination: Pagination, sortings: [Sorting]): <%= classifiedResourceName %>List
  <%= camelCaseResourceName %>(id: String!): <%= classifiedResourceName %>
`

export const Types = [Filter, Pagination, Sorting, <%= classifiedResourceName %>, New<%= classifiedResourceName %>, <%= classifiedResourceName %>Patch]
