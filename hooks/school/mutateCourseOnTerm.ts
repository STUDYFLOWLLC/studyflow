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

export async function mutateCourseNickname(
  courseOnTermId: number,
  newNickname: string,
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
      Nickname: {
        set: newNickname,
      },
    },
    where: {
      CourseOnTermID: courseOnTermId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export function mutateCourseColor(courseOnTermId: number, newColor: string) {
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
      Color: {
        set: newColor,
      },
    },
    where: {
      CourseOnTermID: courseOnTermId,
    },
  }

  return request('/api/graphql', mutation, variables)
}

export async function mutateDeleteCourseOnTerm(courseOnTermId: number) {
  const mutation = gql`
    mutation Mutation($where: CourseOnTermWhereUniqueInput!) {
      deleteCourseOnTerm(where: $where) {
        CourseOnTermID
      }
    }
  `

  const variables = {
    where: {
      CourseOnTermID: courseOnTermId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
