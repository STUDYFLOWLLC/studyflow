/* eslint-disable import/prefer-default-export */

import { gql, request } from 'graphql-request'
import { TermType } from 'types/School'

export async function mutateTermType(termId: number, newType: TermType) {
  const mutation = gql`
    mutation Mutation($data: TermUpdateInput!, $where: TermWhereUniqueInput!) {
      updateTerm(data: $data, where: $where) {
        TermID
      }
    }
  `

  const variables = {
    data: {
      TermType: {
        set: newType,
      },
    },
    where: {
      TermID: termId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateTermName(termId: number, newName: string) {
  const mutation = gql`
    mutation Mutation($data: TermUpdateInput!, $where: TermWhereUniqueInput!) {
      updateTerm(data: $data, where: $where) {
        TermID
      }
    }
  `

  const variables = {
    data: {
      TermName: {
        set: newName,
      },
    },
    where: {
      TermID: termId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
