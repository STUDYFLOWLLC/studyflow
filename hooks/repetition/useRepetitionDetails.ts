/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { Repetition } from 'types/Repetition'

interface Ret {
  repetitionDetails: Repetition | null
  repetitionDetailsLoading: boolean
  repetitionDetailsError: any
  mutateRepetitionDetails: KeyedMutator<any>
}

export default function useRepetitionDetails(
  repetitionId: string | undefined | null,
): Ret {
  const query = gql`
    query Repetition(
      $where: RepetitionWhereUniqueInput!
      $orderBy: [FlashcardOrderByWithRelationInput!]
      $fkFlashcardsWhere2: FlashcardWhereInput
    ) {
      repetition(where: $where) {
        RepetitionID
        CreatedTime
        FK_FlowID
        FK_FlashcardStackID
        FK_Tasks {
          TaskID
          Title
          Completed
          Description
          DueDate
          Type
        }
        FK_FlashcardStack {
          FlashcardStackID
          CreatedTime
          Title
          Description
          FK_Flashcards(orderBy: $orderBy, where: $fkFlashcardsWhere2) {
            FlashcardID
            CreatedTime
            FK_FlashcardStackID
            Position
            Front
            FrontImageUrl
            Back
            BackImageUrl
            FK_FlashcardReviews {
              FlashcardReviewID
              CreatedTime
              FK_FlashcardID
              Status
            }
          }
        }
      }
    }
  `

  const variables = {
    where: {
      RepetitionID: repetitionId,
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
  }

  const { data, error, mutate } = useSWR(
    repetitionId ? [query, variables] : null,
  )

  console.log(data)
  console.log(error)

  if (data?.mutate) {
    return {
      repetitionDetails: data.newRepetition,
      repetitionDetailsLoading: false,
      repetitionDetailsError: null,
      mutateRepetitionDetails: mutate,
    }
  }

  if (data?.repetition) {
    return {
      repetitionDetails: data.repetition,
      repetitionDetailsLoading: false,
      repetitionDetailsError: null,
      mutateRepetitionDetails: mutate,
    }
  }

  return {
    repetitionDetails: null,
    repetitionDetailsLoading: !data && !error,
    repetitionDetailsError: error,
    mutateRepetitionDetails: mutate,
  }
}
