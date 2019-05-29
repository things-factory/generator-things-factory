import { gql } from 'apollo-server-koa'

export const New<%= classifiedResourceName %> = gql`
  input New<%= classifiedResourceName %> {
    name: String!
    description: String
  }
`
