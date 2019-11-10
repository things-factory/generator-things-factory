import gql from 'graphql-tag'

export const <%= classifiedResourceName %>List = gql`
  type <%= classifiedResourceName %>List {
    items: [<%= classifiedResourceName %>]
    total: Int
  }
`
