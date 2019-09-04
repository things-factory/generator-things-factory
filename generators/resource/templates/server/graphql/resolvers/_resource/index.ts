import { <%= camelCaseResourceName %>Resolver } from './<%= resourceName %>'
import { <%= pluralCamelCaseResourceName %>Resolver } from './<%= resourceName %>s'

import { update<%= classifiedResourceName %> } from './update-<%= resourceName %>'
import { updateMultiple<%= classifiedResourceName %> } from './update-multiple-<%= resourceName %>'
import { create<%= classifiedResourceName %> } from './create-<%= resourceName %>'
import { delete<%= classifiedResourceName %> } from './delete-<%= resourceName %>'
import { delete<%= pluralClassifiedResourceName %> } from './delete-<%= resourceName %>s'

export const Query = {
  ...<%= pluralCamelCaseResourceName %>Resolver,
  ...<%= camelCaseResourceName %>Resolver
}

export const Mutation = {
  ...update<%= classifiedResourceName %>,
  ...updateMultiple<%= classifiedResourceName %>,
  ...create<%= classifiedResourceName %>,
  ...delete<%= classifiedResourceName %>,
  ...delete<%= pluralClassifiedResourceName %>
}
