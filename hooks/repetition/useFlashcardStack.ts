/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlashcardStack } from 'types/Repetition'

interface Ret {
  flashcardStack: FlashcardStack | null
  flashcardStackLoading: boolean
  flashcardStackError: any
  mutateFlashcardStack: KeyedMutator<any>
}

export default function useFlashcardStack(
  flashcardStackId: string | undefined,
): Ret {
  const query = gql`
    query Query(
      $where: FlashcardStackWhereUniqueInput!
      $orderBy: [FlashcardOrderByWithRelationInput!]
      $fkFlashcardsWhere2: FlashcardWhereInput
      $fkFlashcardReviewsOrderBy2: [FlashcardReviewOrderByWithRelationInput!]
    ) {
      flashcardStack(where: $where) {
        FlashcardStackID
        CreatedTime
        FK_FlowID
        FK_Flashcards(orderBy: $orderBy, where: $fkFlashcardsWhere2) {
          FlashcardID
          CreatedTime
          FK_FlashcardStackID
          Position
          Front
          FrontImageUrl
          Back
          BackImageUrl
          FK_FlashcardReviews(orderBy: $fkFlashcardReviewsOrderBy2) {
            FlashcardReviewID
            CreatedTime
            FK_FlashcardID
            Status
          }
        }
        Title
        Description
      }
    }
  `

  const variables = {
    where: {
      FlashcardStackID: flashcardStackId,
    },
    orderBy: [
      {
        Position: 'asc',
      },
    ],
    fkFlashcardsWhere2: {
      DeletedTime: {
        equals: null,
      },
    },
    fkFlashcardReviewsOrderBy2: [
      {
        CreatedTime: 'desc',
      },
    ],
  }

  const { data, error, mutate } = useSWR(
    flashcardStackId ? [query, variables] : null,
  )

  if (data?.mutate) {
    return {
      flashcardStack: data.mutatedFlashcardStack,
      flashcardStackLoading: false,
      flashcardStackError: null,
      mutateFlashcardStack: mutate,
    }
  }

  if (data?.flashcardStack) {
    return {
      flashcardStack: data.flashcardStack,
      flashcardStackLoading: false,
      flashcardStackError: null,
      mutateFlashcardStack: mutate,
    }
  }

  return {
    flashcardStack: null,
    flashcardStackLoading: !data && !error,
    flashcardStackError: error,
    mutateFlashcardStack: mutate,
  }
}
