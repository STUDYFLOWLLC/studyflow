import request, { gql } from 'graphql-request'

export default async function mutateCompleted(
  taskId: number,
  completed: boolean,
) {
  const mutation = gql`
    mutation Mutation($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
      updateTask(data: $data, where: $where) {
        TaskID
      }
    }
  `

  const variables = {
    data: {
      Completed: {
        set: completed,
      },
    },
    where: {
      TaskID: taskId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)

  return data
}
