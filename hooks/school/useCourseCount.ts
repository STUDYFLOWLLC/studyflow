import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useCourseCount(SchoolID: number) {
  const query = gql`
    query Query($where: CourseWhereInput) {
      aggregateCourse(where: $where) {
        _count {
          CourseID
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
      courseCount: data.aggregateCourse._count.CourseID,
      courseCountLoading: false,
      courseCountError: error,
    }
  }

  return {
    courseCount: 0,
    courseCountLoading: !error && !data,
    courseCountError: error,
  }
}
