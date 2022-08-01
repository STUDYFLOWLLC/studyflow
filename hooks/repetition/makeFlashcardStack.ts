import request, { gql } from 'graphql-request'
import { Flashcard, FlashcardReview, FlashcardStack } from 'types/Repetition'
import { v4 as uuid } from 'uuid'

export default async function makeFlashcardStack(flowId: string) {
  const mutation = gql`
    mutation CreateFlashcardStack($data: FlashcardStackCreateInput!) {
      createFlashcardStack(data: $data) {
        FlashcardStackID
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
      FlashcardStackID: stackId,
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
      CreatedTime: now,
      FK_Flow: {
        connect: {
          FlowID: flowId,
        },
      },
    },
  }

  await request('/api/graphql', mutation, variables)

  return {
    FlashcardStackID: stackId,
    CreatedTime: now,
    FK_FlowID: flowId,
    FK_Flashcards: flashcards,
    Title: '',
    Description: '',
  } as FlashcardStack
}
