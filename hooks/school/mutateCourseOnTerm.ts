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

export async function mutateCourseOnTermCourse(
  courseOnTermId: number,
  newCourseId: number,
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
      FK_Course: {
        connect: {
          CourseID: newCourseId,
        },
      },
    },
    where: {
      CourseOnTermID: courseOnTermId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateCourseOnTermIsNew(
  courseOnTermId: number | undefined,
  newBool: boolean,
) {
  if (courseOnTermId === undefined) return

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
      IsNew: {
        set: newBool,
      },
    },
    where: {
      CourseOnTermID: courseOnTermId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateAddCourseOnTerm(termId: number | undefined) {
  if (!termId) return

  const mutation = gql`
    mutation CreateCourseOnTerm($data: CourseOnTermCreateInput!) {
      createCourseOnTerm(data: $data) {
        CourseOnTermID
        Color
        Nickname
        Index
        IsNew
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
  `

  const variables = {
    data: {
      FK_Term: {
        connect: {
          TermID: termId,
        },
      },
      FK_Course: {
        connect: {
          CourseID: 1,
        },
      },
      IsNew: true,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
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
