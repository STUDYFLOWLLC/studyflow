import { gql } from 'graphql-request'

export default function makeRepetition(flowId: string) {
  const mutation = gql`
    mutation Mutation($data: RepetitionCreateInput!) {
      createRepetition(data: $data) {
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

  const variables = {
    data: {
      FK_Flow: {
        connect: {
          FlowID: flowId,
        },
      },
      FK_FlashcardStack: {
        create: {
          FK_Flashcards: {
            createMany: {
              data: [
                {
                  CreatedTime: null,
                  Position: 1,
                  Front: '',
                  Back: '',
                },
              ],
            },
          },
          Title: null,
        },
      },
      FK_Tasks: {
        createMany: {
          data: [
            {
              TaskID: null,
              Title: null,
              DueDate: null,
              Type: null,
            },
          ],
        },
      },
    },
  }
}
