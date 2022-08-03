export enum FlashcardStatus {
  NEUTRAL = 'NEUTRAL',
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
}

export interface FlashcardReview {
  FlashcardReviewID: number
  CreatedTime: string
  FK_FlashcardID: number
  Status: FlashcardStatus
}

export interface Flashcard {
  FlashcardID: string
  CreatedTime: string
  FK_FlashcardStackID: string
  Position: number
  Front: string
  FrontImageUrl?: string
  Back: string
  BackImageUrl?: string
  FK_FlashcardReviews: FlashcardReview[]
}

export interface FlashcardStack {
  FlashcardStackID: string
  CreatedTime: string
  FK_FlowID: string
  FK_Flashcards: Flashcard[]
  Title: string
  Description: string
}
