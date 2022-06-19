/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'

export interface Task {
  CreatedTime: string
  Title: string
  TaskID: number
  Description: string
  DueDate: string
}

interface Ret {
  tasks: Task[]
  tasksLoading: boolean
  tasksError: any
  mutateTasks: KeyedMutator<any>
}

export default function useTasks(userId: number | undefined): Ret {
  const query = gql`
    query Tasks($where: TaskWhereInput) {
      tasks(where: $where) {
        CreatedTime
        Title
        TaskID
        Description
        DueDate
        Completed
      }
    }
  `

  const variables = {
    where: {
      FK_UserID: {
        equals: userId || 0,
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.mutate) {
    return {
      tasks: data.tasks,
      tasksLoading: false,
      tasksError: null,
      mutateTasks: mutate,
    }
  }

  if (data?.tasks) {
    return {
      tasks: data.tasks,
      tasksLoading: false,
      tasksError: null,
      mutateTasks: mutate,
    }
  }

  return {
    tasks: [] as Task[],
    tasksLoading: !data && !error,
    tasksError: error,
    mutateTasks: mutate,
  }
}
