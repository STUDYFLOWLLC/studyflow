import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useCoursesOnTerm(termID: number) {
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
      coursesOnTerm: data,
      coursesOnTermLoading: false,
      coursesOnTermError: error,
      mutateCoursesOnTerm: mutate,
    }
  }

  return {
    coursesOnTerm: data,
    coursesOnTermLoading: !error && !data,
    coursesOnTermError: error,
    mutateCoursesOnTerm: mutate,
  }
}
