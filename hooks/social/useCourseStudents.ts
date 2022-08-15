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
      $orderBy: [CourseOnTermOrderByWithRelationInput!]
    ) {
      course(where: $where) {
        CourseOnTerm(where: $courseOnTermWhere2, orderBy: $orderBy) {
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
    orderBy: [
      {
        CreatedTime: 'desc',
      },
    ],
  }

  const { data, error } = useSWR(courseId ? [query, variables] : null)

  console.log(data)

  if (data?.course) {
    return {
      courseStudents: data.course.CourseOnTerm.filter(
        (t: any) => t.FK_Term?.FK_User !== undefined,
      ).map((term: any) => term.FK_Term.FK_User) as PublicUser[],
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
