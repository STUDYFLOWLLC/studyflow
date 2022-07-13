/* eslint-disable @typescript-eslint/no-explicit-any */

import request, { gql } from 'graphql-request'
import { TaskType } from 'types/Task'

export default async function makeTask(
  taskId: string,
  title: string,
  description: string,
  dueDate: string | undefined,
  email: string,
  courseOnTermId: number,
  type: TaskType | undefined,
  flowId?: string,
) {
  const mutation = gql`
    mutation Mutation($data: TaskCreateInput!) {
      createTask(data: $data) {
        TaskID
        Title
      }
    }
  `

  const variables: any = {
    data: {
      TaskID: taskId,
      Title: title,
      FK_User: {
        connect: {
          Email: email,
        },
      },
      Description: description,
      DueDate: dueDate,
      FK_CourseOnTerm: {
        connect: {
          CourseOnTermID: courseOnTermId,
        },
      },
      Type: type,
    },
  }

  if (flowId) {
    variables.data.FK_Flow = {
      connect: {
        FlowID: flowId,
      },
    }
  }

  const data = await request('/api/graphql', mutation, variables)

  return data
}
