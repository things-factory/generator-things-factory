import { gql } from 'apollo-server-koa'

export const CommonCode = gql`
  type CommonCode {
    id: String
    name: String
    domain: Domian
    description: String
    commonCodeDetails: CommonCodeDetail
  }
`
