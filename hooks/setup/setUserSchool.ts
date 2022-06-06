import { gql, request } from 'graphql-request'

export default async function setUserSchool(email: string, schoolID: number) {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      FK_School: {
        connect: {
          SchoolID: schoolID,
        },
      },
    },
    where: {
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}
