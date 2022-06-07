import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useProfessorCount(CourseID: number) {
  const query = gql`
    query Query($where: ProfessorWhereInput) {
      aggregateProfessor(where: $where) {
        _count {
          ProfessorID
        }
      }
    }
  `

  const variables = {
    where: {
      FK_SchoolID: {
        equals: SchoolID,
      },
    },
  }

  const { data, error } = useSWR([query, variables])

  if (data) {
    return {
      professorCount: data.aggregateProfessor._count.ProfessorID,
      professorCountLoading: false,
      professorCountError: error,
    }
  }

  return {
    professorCount: 0,
    professorCountLoading: !error && !data,
    professorCountError: error,
  }
}
