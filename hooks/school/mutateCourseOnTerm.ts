/* eslint-disable import/prefer-default-export */

import { gql, request } from 'graphql-request'

export async function mutateCourseOnTermIndex(
  courseOnTermId: number,
  newIndex: number,
) {
  const mutation = gql`
    mutation Mutation(
      $data: CourseOnTermUpdateInput!
      $where: CourseOnTermWhereUniqueInput!
    ) {
      updateCourseOnTerm(data: $data, where: $where) {
        CourseOnTermID
      }
    }
  `

  const variables = {
    data: {
      Index: {
        set: newIndex,
      },
    },
    where: {
      CourseOnTermID: courseOnTermId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
