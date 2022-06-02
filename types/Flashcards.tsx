/* eslint-disable no-shadow */
export enum FlashcardStatus {
  neutral,
  wrong,
  right,
}

export interface FlashcardProps {
  front: string
  back: string
  status: FlashcardStatus
}

export interface DeckProps {
  cards: FlashcardProps[]
}
