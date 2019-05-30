import { gql } from 'apollo-server-koa'

export const <%= classifiedResourceName %>List = gql`
  type <%= classifiedResourceName %>List {
    items: [<%= classifiedResourceName %>]
    total: Int
  }
`
