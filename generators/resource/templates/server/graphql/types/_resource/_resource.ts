import { gql } from 'apollo-server-koa'

export const <%= classifiedResourceName %> = gql`
  type <%= classifiedResourceName %> {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
