import request, { gql } from 'graphql-request'

export default async function makeTask(
  title: string,
  description: string,
  dueDate: string | undefined,
  email: string,
) {
  const mutation = gql`
    mutation Mutation($data: TaskCreateInput!) {
      createTask(data: $data) {
        TaskID
        Title
      }
    }
  `

  const variables = {
    data: {
      Title: title,
      FK_User: {
        connect: {
          Email: email,
        },
      },
      Description: description,
      DueDate: dueDate || null,
    },
  }

  const data = await request('/api/graphql', mutation, variables)

  return data
}
