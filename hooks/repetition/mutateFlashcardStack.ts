import request, { gql } from 'graphql-request'

export default async function mutateDeleteFlashcardStack(
  flashcardStackId: string,
) {
  const mutation = gql`
    mutation Mutation(
      $where: FlashcardStackWhereUniqueInput!
      $data: FlashcardStackUpdateInput!
    ) {
      updateFlashcardStack(where: $where, data: $data) {
        FlashcardStackID
      }
    }
  `

  const variables = {
    data: {
      DeletedTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      FlashcardStackID: flashcardStackId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
