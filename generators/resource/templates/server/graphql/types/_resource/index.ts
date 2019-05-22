import { <%= classifiedResourceName %> } from './<%= resourceName %>'
import { New<%= classifiedResourceName %> } from './new-<%= resourceName %>'
import { <%= classifiedResourceName %>Patch } from './<%= resourceName %>-patch'

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
  <%= pluralCamelCaseResourceName %>: [<%= classifiedResourceName %>]
  <%= camelCaseResourceName %>(id: String!): <%= classifiedResourceName %>
`

export const Types = [<%= classifiedResourceName %>, New<%= classifiedResourceName %>, <%= classifiedResourceName %>Patch]
