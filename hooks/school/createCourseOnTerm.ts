import { gql, request } from 'graphql-request'
import { CourseOnTermInfo } from 'hooks/school/useTermDetails'

export default async function createCourseOnTerm(
  color: string,
  courseID: number,
  termID: number,
  nickname?: string,
): Promise<boolean | CourseOnTermInfo> {
  const query = gql`
    mutation Mutation($data: TermUpdateInput!, $where: TermWhereUniqueInput!) {
      updateTerm(data: $data, where: $where) {
        FK_CourseOnTerm {
          CourseOnTermID
          Color
          Nickname
          FK_Course {
            IsOfficial
            Title
            Code
            Term
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
    data: {
      FK_CourseOnTerm: {
        create: [
          {
            Color: color,
            Nickname: nickname,
            FK_Course: {
              connect: {
                CourseID: courseID,
              },
            },
          },
        ],
      },
    },
    where: {
      TermID: termID,
    },
  }

  const data = await request('/api/graphql', query, variables)
  if (data?.updateTerm?.FK_CourseOnTerm.length !== 0) {
    return {
      CourseOnTermID: data.updateTerm.FK_CourseOnTerm[0].CourseOnTermID,
      Color: data.updateTerm.FK_CourseOnTerm[0].Color,
      Nickname: data.updateTerm.FK_CourseOnTerm[0].Nickname,
      IsOfficial: data.updateTerm.FK_CourseOnTerm[0].FK_Course?.IsOfficial,
      Title: data.updateTerm.FK_CourseOnTerm[0].FK_Course?.Title,
      Code: data.updateTerm.FK_CourseOnTerm[0].FK_Course?.Code,
      Term: data.updateTerm.FK_CourseOnTerm[0].FK_Course?.Term,
      ProfessorName:
        data.updateTerm.FK_CourseOnTerm[0].FK_Course?.FK_Professor?.Name,
      Email: data.updateTerm.FK_CourseOnTerm[0].FK_Course?.FK_Professor?.Email,
    }
  }
  return false
}
