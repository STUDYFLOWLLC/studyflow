import { gql, request } from 'graphql-request'

export default async function createCourseOnTerm(
  color: string,
  courseID: number,
  termID: number,
  nickname?: string,
) {
  const query = gql`
    mutation Mutation($data: TermUpdateInput!, $where: TermWhereUniqueInput!) {
      updateTerm(data: $data, where: $where) {
        TermID
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
  return data
}
