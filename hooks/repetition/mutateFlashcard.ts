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

export async function mutateFlashcardFrontImageUrl(
  flashcardId: string,
  newFrontImageURL: string,
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
      FrontImageUrl: {
        set: newFrontImageURL,
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

export async function mutateFlashcardBackImageUrl(
  flashcardId: string,
  newBackImageUrl: string,
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
      BackImageUrl: {
        set: newBackImageUrl,
      },
    },
    where: {
      FlashcardID: flashcardId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateDeleteFlashcard(flashcardId: string) {
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
      DeletedTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      FlashcardID: flashcardId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateFlashcardPosition(
  flashcardId: string,
  newPosition: number,
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
      Position: {
        set: newPosition,
      },
    },
    where: {
      FlashcardID: flashcardId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateAddFlashcard(
  newFlashcardId: string,
  flashcardStackId: string,
  position: number,
) {
  const mutation = gql`
    mutation Mutation($data: FlashcardCreateInput!) {
      createFlashcard(data: $data) {
        FlashcardID
      }
    }
  `

  const variables = {
    data: {
      FlashcardID: newFlashcardId,
      FK_FlashcardStack: {
        connect: {
          FlashcardStackID: flashcardStackId,
        },
      },
      Position: position,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
