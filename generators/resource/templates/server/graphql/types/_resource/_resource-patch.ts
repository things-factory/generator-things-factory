import { gql } from 'apollo-server-koa'

export const <%= classifiedResourceName %>Patch = gql`
  input <%= classifiedResourceName %>Patch {
    name: String
    description: String
    cuFlag: String
  }
`
