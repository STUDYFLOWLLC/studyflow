import request, { gql } from 'graphql-request'

export default async function deleteTask(taskId: string) {
  const mutation = gql`
    mutation DeleteTask($where: TaskWhereUniqueInput!) {
      deleteTask(where: $where) {
        TaskID
      }
    }
  `

  const variables = {
    where: {
      TaskID: taskId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)

  return data
}
