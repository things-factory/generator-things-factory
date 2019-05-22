import { <%= camelCaseResourceName %>Resolver } from './<%= resourceName %>'
import { <%= pluralCamelCaseResourceName %>Resolver } from './<%= resourceName %>s'

import { update<%= classifiedResourceName %> } from './update-<%= resourceName %>'
import { create<%= classifiedResourceName %> } from './create-<%= resourceName %>'
import { delete<%= classifiedResourceName %> } from './delete-<%= resourceName %>'

export const Query = {
  ...<%= pluralCamelCaseResourceName %>Resolver,
  ...<%= camelCaseResourceName %>Resolver
}

export const Mutation = {
  ...update<%= classifiedResourceName %>,
  ...create<%= classifiedResourceName %>,
  ...delete<%= classifiedResourceName %>
}
