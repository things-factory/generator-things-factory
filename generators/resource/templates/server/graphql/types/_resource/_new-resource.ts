import gql from 'graphql-tag'

export const New<%= classifiedResourceName %> = gql`
  input New<%= classifiedResourceName %> {
    name: String!
    description: String
  }
`
