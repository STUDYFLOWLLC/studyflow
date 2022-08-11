/* eslint-disable no-nested-ternary */
import request, { gql } from 'graphql-request'
import { FlowTask } from 'hooks/flows/useFlowDetails'
import {
  Flashcard,
  FlashcardReview,
  Repetition,
  RepetitionType,
} from 'types/Repetition'
import { TaskType } from 'types/Task'
import { v4 as uuid } from 'uuid'

export default async function makeRepetition(
  repetitionId: string,
  flowId: string,
  flowTitle: string | undefined,
  repetitionType: RepetitionType,
): Promise<Repetition | undefined> {
  if (!flowTitle) return undefined

  const mutation = gql`
    mutation Mutation($data: RepetitionCreateInput!) {
      createRepetition(data: $data) {
        RepetitionID
        CreatedTime
        RepetitionType
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
          FK_Flashcards {
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

  const stackId = uuid()
  const now = new Date().toISOString()
  const flashcards: Flashcard[] = [1, 2, 3, 4, 5].map((i) => ({
    FlashcardID: uuid(),
    CreatedTime: now,
    FK_FlashcardStackID: stackId,
    Position: i,
    Front: '',
    Back: '',
    FK_FlashcardReviews: [] as FlashcardReview[],
  }))

  const fourTen = [
    {
      TaskID: uuid(),
      Title: 'Fill out flashcards',
      Completed: false,
      Description: '',
      DueDate: now,
      Type: TaskType.WORK_ON,
    },
    {
      TaskID: uuid(),
      Title: `(1/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 1 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(2/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 3 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(3/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 6 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(4/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
  ] as FlowTask[]

  const fourThirty = [
    {
      TaskID: uuid(),
      Title: 'Fill out flashcards',
      Completed: false,
      Description: '',
      DueDate: now,
      Type: TaskType.WORK_ON,
    },
    {
      TaskID: uuid(),
      Title: `(1/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 1 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(2/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 3 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(3/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(4/4) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
  ] as FlowTask[]

  const sixThirty = [
    {
      TaskID: uuid(),
      Title: 'Fill out flashcards',
      Completed: false,
      Description: '',
      DueDate: now,
      Type: TaskType.WORK_ON,
    },
    {
      TaskID: uuid(),
      Title: `(1/6) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 1 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(2/6) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 3 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(3/6) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(4/6) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(5/6) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 22 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
    {
      TaskID: uuid(),
      Title: `(6/6) Review ${flowTitle}`,
      Completed: false,
      Description: '',
      DueDate: new Date(
        new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      Type: TaskType.REVIEW,
    },
  ] as FlowTask[]

  const variables = {
    data: {
      RepetitionID: repetitionId,
      RepetitionType: repetitionType,
      FK_Flow: {
        connect: {
          FlowID: flowId,
        },
      },
      FK_FlashcardStack: {
        create: {
          FK_Flashcards: {
            createMany: {
              data: flashcards.map((flashcard) => ({
                FlashcardID: flashcard.FlashcardID,
                CreatedTime: flashcard.CreatedTime,
                Position: flashcard.Position,
                Front: flashcard.Front,
                Back: flashcard.Back,
              })),
            },
          },
          Title: `${flowTitle} Repetition`,
        },
      },
      FK_Tasks: {
        createMany: {
          data:
            repetitionType === RepetitionType.FOURTHIRTY
              ? fourThirty
              : repetitionType === RepetitionType.FOURTEN
              ? fourTen
              : sixThirty,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data.createRepetition as Repetition
}
