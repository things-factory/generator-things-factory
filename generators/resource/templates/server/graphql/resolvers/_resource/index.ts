import { <%= camelCaseResourceName %>Resolver } from './<%= moduleName %>'
import { <%= pluralCamelCaseResourceName %>Resolver } from './<%= moduleName %>s'

import { update<%= classifiedResourceName %> } from './update-<%= moduleName %>'
import { create<%= classifiedResourceName %> } from './create-<%= moduleName %>'
import { delete<%= classifiedResourceName %> } from './delete-<%= moduleName %>'

export const Query = {
  ...<%= pluralCamelCaseResourceName %>Resolver,
  ...<%= camelCaseResourceName %>Resolver
}

export const Mutation = {
  ...update<%= classifiedResourceName %>,
  ...create<%= classifiedResourceName %>,
  ...delete<%= classifiedResourceName %>
}
