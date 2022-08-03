import { FlowTask } from 'hooks/flows/useFlowDetails'

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
  FK_FlowID?: string
  FK_Flashcards: Flashcard[]
  Title: string
  Description: string
}

export enum RepetitionType {
  FOURTEN = 'FOURTEN',
  FOURTHIRTY = 'FOURTHIRTY',
  SIXTHIRTY = 'SIXTHIRTY',
}

export interface Repetition {
  RepetitionID: string
  CreatedTime: string
  RepetitionType: RepetitionType
  FK_FlashcardStack: FlashcardStack
  FK_FlashcardStackID: string
  FK_FlowID: string
  FK_Tasks: FlowTask[]
}
