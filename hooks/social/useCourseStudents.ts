/* eslint-disable camelcase */
import { gql } from 'graphql-request'
import useSWR from 'swr'
import { PublicUser } from 'types/Social'

interface Ret {
  courseStudents: PublicUser[]
  courseStudentsLoading: boolean
  courseStudentsError: any
}

export default function useCourseStudents(courseId: number | undefined): Ret {
  const query = gql`
    query Course(
      $where: CourseWhereUniqueInput!
      $courseOnTermWhere2: CourseOnTermWhereInput
      $take: Int
      $orderBy: [CourseOnTermOrderByWithRelationInput!]
    ) {
      course(where: $where) {
        CourseOnTerm(
          where: $courseOnTermWhere2
          take: $take
          orderBy: $orderBy
        ) {
          FK_Term {
            FK_User {
              UserID
              ProfilePictureLink
              Name
              Username
              FK_School {
                Name
              }
            }
          }
        }
      }
    }
  `

  const variables = {
    where: {
      CourseID: courseId,
    },
    take: 1,
    orderBy: [
      {
        CreatedTime: 'desc',
      },
    ],
  }

  const { data, error } = useSWR(courseId ? [query, variables] : null)

  if (data?.course) {
    return {
      courseStudents: data.course.CourseOnTerm.map(
        (term: any) => term.FK_Term.FK_User,
      ) as PublicUser[],
      courseStudentsLoading: false,
      courseStudentsError: null,
    }
  }

  return {
    courseStudents: [] as PublicUser[],
    courseStudentsLoading: !data && !error,
    courseStudentsError: error,
  }
}
