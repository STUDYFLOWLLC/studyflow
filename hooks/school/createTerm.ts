import { TermType } from '@prisma/client'
import { gql, request } from 'graphql-request'

export default function setUserSchool(
  termType: TermType,
  termName: string,
  termStartDate: Date,
  termEndDate: Date,
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
      TermStartDate: termStartDate,
      TermEndDate: termEndDate,
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

  request('/api/graphql', query, variables)
}
