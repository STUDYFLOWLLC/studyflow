/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'

export interface CourseOnTerm {
  CourseOnTermID: number
  Color: string
  Nickname: string
  FK_Course: {
    Code: string
    Term: string
    Title: string
    FK_Professor: {
      Name: string
      Email: string
    }
  }
}

interface Ret {
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
  coursesOnTermError: any
  mutateCoursesOnTerm?: KeyedMutator<any>
}

export default function useCoursesOnTerm(termID: number | undefined): Ret {
  const query = gql`
    query Query($where: TermWhereInput) {
      findFirstTerm(where: $where) {
        FK_CourseOnTerm {
          CourseOnTermID
          Color
          Nickname
          FK_Course {
            Code
            Term
            Title
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
        equals: termID,
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (
    data &&
    data.findFirstTerm &&
    data.findFirstTerm.FK_CourseOnTerm.length !== 0
  ) {
    return {
      coursesOnTerm: data.findFirstTerm.FK_CourseOnTerm,
      coursesOnTermLoading: false,
      coursesOnTermError: error,
      mutateCoursesOnTerm: mutate,
    }
  }

  return {
    coursesOnTerm: [] as CourseOnTerm[],
    coursesOnTermLoading: !error && !data,
    coursesOnTermError: error,
    mutateCoursesOnTerm: mutate,
  }
}
