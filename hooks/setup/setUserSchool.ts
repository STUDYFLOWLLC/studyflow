import { gql, request } from 'graphql-request'

interface SchoolExport {
  SchoolID: number
  Name: string
  HasClassSupport: boolean
  SearchIndex: string
  TermType: string
}

export default async function setUserSchool(
  email: string,
  schoolID: number,
): Promise<SchoolExport> {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        FK_School {
          SchoolID
          Name
          HasClassSupport
          SearchIndex
          TermType
        }
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
  if (data.updateUser?.FK_School) return data.updateUser.FK_School
  return {
    SchoolID: 0,
    Name: 'Error',
    HasClassSupport: false,
    SearchIndex: '',
    TermType: '',
  }
}
