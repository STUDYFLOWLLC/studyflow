/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { TermType } from 'types/School'

interface CourseOnTermRaw {
  CourseOnTermID: number
  Color: string
  Nickname: string
  FK_Course: {
    Code: string
    Title: string
    Term: string
    IsOfficial: boolean
    FK_Professor?: {
      Name: string
      Email: string
    }
  }
}

export interface CourseOnTermInfo {
  CourseOnTermID: number
  Color: string
  Nickname: string
  IsOfficial: boolean
  Title: string
  Code: string
  Term: string
  ProfessorName?: string
  Email?: string
}

interface TermInfo {
  TermID: number
  TermType: TermType
  TermName: string
  CoursesOnTerm: CourseOnTermInfo[]
}

interface TermDetails {
  termDetails: TermInfo | null
  termDetailsLoading: boolean
  termDetailsError: any
  mutateTermDetails: KeyedMutator<any>
}

export default function useTermDetails(
  termId: number | undefined,
): TermDetails {
  const query = gql`
    query Query($where: TermWhereInput) {
      findFirstTerm(where: $where) {
        TermID
        TermType
        TermName
        FK_CourseOnTerm {
          CourseOnTermID
          Color
          Nickname
          FK_Course {
            IsOfficial
            Title
            Code
            Term
            FK_Professor {
              Name
              Email
            }
          }
        }
      }
    }
  `

  const variables = {
    where: {
      TermID: {
        equals: termId,
      },
    },
  }

  const { data, error, mutate } = useSWR(termId ? [query, variables] : null)

  if (data?.mutated === true) {
    return {
      termDetails: {
        TermID: data.TermID,
        TermType: data.TermType,
        TermName: data.TermName,
        CoursesOnTerm: data.CoursesOnTerm,
      },
      termDetailsLoading: false,
      termDetailsError: null,
      mutateTermDetails: mutate,
    }
  }

  if (data?.findFirstTerm) {
    return {
      termDetails: {
        TermID: data.findFirstTerm.TermID,
        TermType: data.findFirstTerm.TermType,
        TermName: data.findFirstTerm.TermName,
        CoursesOnTerm: data.findFirstTerm.FK_CourseOnTerm.map(
          (CourseOnTerm: CourseOnTermRaw) => ({
            CourseOnTermID: CourseOnTerm.CourseOnTermID,
            Color: CourseOnTerm.Color,
            Nickname: CourseOnTerm.Nickname,
            IsOfficial: CourseOnTerm.FK_Course?.IsOfficial,
            Title: CourseOnTerm.FK_Course?.Title,
            Code: CourseOnTerm.FK_Course?.Code,
            Term: CourseOnTerm.FK_Course?.Term,
            ProfessorName: CourseOnTerm.FK_Course?.FK_Professor?.Name,
            Email: CourseOnTerm.FK_Course?.FK_Professor?.Email,
          }),
        ),
      },
      termDetailsLoading: false,
      termDetailsError: error,
      mutateTermDetails: mutate,
    }
  }

  return {
    termDetails: null,
    termDetailsLoading: !data && !error,
    termDetailsError: error,
    mutateTermDetails: mutate,
  }
}
