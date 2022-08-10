/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { TaskType } from 'types/Task'

export interface Task {
  CreatedTime: string
  Title: string
  TaskID: string
  Description: string
  DueDate: string
  Completed: boolean
  FK_CourseOnTermID: number
  FK_CourseOnTerm: {
    CourseOnTermID: number
    Color: string
    Nickname: string
    FK_Course: {
      Code: string
    }
  }
  Type: TaskType
}

interface Ret {
  tasks: Task[]
  tasksLoading: boolean
  tasksError: any
  mutateTasks: KeyedMutator<any>
}

export default function useTasks(
  userId: number | undefined,
  groupBy?: 'Today' | 'All' | number,
): Ret {
  const query = gql`
    query Tasks($where: TaskWhereInput) {
      tasks(where: $where) {
        CreatedTime
        Title
        TaskID
        Description
        Completed
        DueDate
        FK_CourseOnTermID
        FK_CourseOnTerm {
          CourseOnTermID
          Color
          Nickname
          FK_Course {
            Code
          }
        }
        Type
      }
    }
  `

  let variables: any = {}

  if (groupBy === 'All' || groupBy === undefined) {
    variables = {
      where: {
        AND: [
          {
            FK_UserID: {
              equals: userId,
            },
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
        ],
      },
    }
  } else if (groupBy === 'Today') {
    const start = new Date()
    start.setUTCHours(0, 0, 0, 0)
    const end = new Date()
    end.setUTCHours(23, 59, 59, 999)
    variables = {
      where: {
        AND: [
          {
            FK_UserID: {
              equals: userId,
            },
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
          {
            DueDate: {
              gt: start.toISOString(),
              lt: end.toISOString(),
            },
          },
        ],
      },
    }
  } else {
    variables = {
      where: {
        AND: [
          {
            FK_UserID: {
              equals: userId,
            },
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
          {
            FK_CourseOnTermID: {
              equals: groupBy,
            },
          },
        ],
      },
    }
  }

  const { data, error, mutate } = useSWR([query, variables], {
    revalidateOnMount: false,
  })

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
