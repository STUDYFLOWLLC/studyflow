/* eslint-disable import/prefer-default-export */

import request, { gql } from 'graphql-request'

export async function mutateFlashcardFront(
  flashcardId: string,
  newFront: string,
) {
  const mutation = gql`
    mutation Mutation(
      $data: FlashcardUpdateInput!
      $where: FlashcardWhereUniqueInput!
    ) {
      updateFlashcard(data: $data, where: $where) {
        FlashcardID
      }
    }
  `

  const variables = {
    data: {
      Front: {
        set: newFront,
      },
    },
    where: {
      FlashcardID: flashcardId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateFlashcardBack(
  flashcardId: string,
  newBack: string,
) {
  const mutation = gql`
    mutation Mutation(
      $data: FlashcardUpdateInput!
      $where: FlashcardWhereUniqueInput!
    ) {
      updateFlashcard(data: $data, where: $where) {
        FlashcardID
      }
    }
  `

  const variables = {
    data: {
      Back: {
        set: newBack,
      },
    },
    where: {
      FlashcardID: flashcardId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
