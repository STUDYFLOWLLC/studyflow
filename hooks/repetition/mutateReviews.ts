import request, { gql } from 'graphql-request'
import { FlashcardStatus } from 'types/Repetition'

export default async function mutateCreateFlashcardStackReview(
  flashcardStackId: string,
) {
  const mutation = gql`
    mutation CreateFlashcardStackReview(
      $data: FlashcardStackReviewCreateInput!
    ) {
      createFlashcardStackReview(data: $data) {
        FlashcardStackReviewID
        CreatedTime
        EndTime
        FK_FlashcardStackID
      }
    }
  `

  const variables = {
    data: {
      FK_FlashcardStack: {
        connect: {
          FlashcardStackID: flashcardStackId,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data.createFlashcardStackReview
}

export async function mutateCreateFlashcardReview(
  flashcardId: string,
  status: FlashcardStatus,
  newId: string,

  flashcardStackReviewId?: string | undefined,
) {
  const mutation = gql`
    mutation CreateFlashcardReview($data: FlashcardReviewCreateInput!) {
      createFlashcardReview(data: $data) {
        FlashcardReviewID
        CreatedTime
        FK_FlashcardID
        Status
      }
    }
  `

  const variables = {
    data: {
      FlashcardReviewID: newId,
      CreatedTime: new Date().toISOString(),
      FK_FlashcardStackReview: {
        connect: {
          FlashcardStackReviewID: flashcardStackReviewId,
        },
      },
      FK_Flashcard: {
        connect: {
          FlashcardID: flashcardId,
        },
      },
      Status: status,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data.createFlashcardReview
}
