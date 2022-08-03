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

  console.log(fourThirty)

  const variables = {
    data: {
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
          data: fourThirty,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data.createRepetition as Repetition
}
