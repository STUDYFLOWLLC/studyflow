/* eslint-disable import/prefer-default-export */

export enum TermType {
  QUARTER = 'QUARTER',
  TRIMESTER = 'TRIMESTER',
  SEMESTER = 'SEMESTER',
  SUMMER = 'SUMMER',
}

export interface School {
  SchoolID: number
  Name: string
  HasClassSupport: boolean
  SearchIndex: string | null
  TermType: TermType | null
}
