import { TermType } from '@prisma/client'
import { gql, request } from 'graphql-request'

export default async function createTerm(
  termType: TermType,
  termName: string,
  email: string,
  schoolID: number,
) {
  const query = gql`
    mutation Mutation($data: TermCreateInput!) {
      createTerm(data: $data) {
        TermID
      }
    }
  `

  const variables = {
    data: {
      TermType: termType,
      TermName: termName,
      FK_User: {
        connect: {
          Email: email,
        },
      },
      FK_School: {
        connect: {
          SchoolID: schoolID,
        },
      },
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}
