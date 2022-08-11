/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'

export interface fkCourse {
  CourseID: number
  Code: string
  Term: string
  Title: string
  FK_Professor: {
    Name: string
    Email: string
  }
}

export interface CourseOnTerm {
  CourseOnTermID: number
  Color: string
  Nickname: string
  Index: number
  IsNew: boolean
  FK_Course?: fkCourse
}

interface Ret {
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
  coursesOnTermError: any
  mutateCoursesOnTerm: KeyedMutator<any>
}

export default function useCoursesOnTerm(
  termID: number | undefined,
  filterFunk?: (arg0: CourseOnTerm) => boolean,
): Ret {
  const query = gql`
    query Query($where: TermWhereInput) {
      findFirstTerm(where: $where) {
        FK_CourseOnTerm {
          CourseOnTermID
          Color
          Nickname
          Index
          IsNew
          FK_Course {
            CourseID
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

  const variables: any = {
    where: {
      TermID: {
        equals: termID,
      },
    },
  }

  const { data, error, mutate } = useSWR(termID ? [query, variables] : null)

  if (data?.mutate) {
    return {
      coursesOnTerm: data.coursesOnTerm,
      coursesOnTermLoading: false,
      coursesOnTermError: null,
      mutateCoursesOnTerm: mutate,
    }
  }

  if (
    data &&
    data.findFirstTerm &&
    data.findFirstTerm.FK_CourseOnTerm.length !== 0
  ) {
    return {
      coursesOnTerm: !filterFunk
        ? data.findFirstTerm.FK_CourseOnTerm
        : data.findFirstTerm.FK_CourseOnTerm.filter(filterFunk),
      coursesOnTermLoading: false,
      coursesOnTermError: error,
      mutateCoursesOnTerm: mutate,
    }
  }

  return {
    coursesOnTerm: [] as CourseOnTerm[],
    coursesOnTermLoading: true,
    coursesOnTermError: error,
    mutateCoursesOnTerm: mutate,
  }
}
