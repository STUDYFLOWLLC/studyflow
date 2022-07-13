/* eslint-disable @typescript-eslint/no-explicit-any */

import { SmallCourse } from 'components/Flow/FlowTop'
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { TaskType } from 'types/Task'

export interface FlowTask {
  TaskID: number
  Title: string
  Completed: boolean
  Description?: string
  DueDate?: string
  Type?: TaskType
  FK_CourseOnTerm?: SmallCourse
}

interface Ret {
  flowTasks: FlowTask[]
  flowTasksLoading: boolean
  flowTasksError: any
  mutateFlowTasks: KeyedMutator<any>
}

export default function useFlowTasks(
  flowId: string,
  courseOnTermInjection?: SmallCourse,
): Ret {
  const query = gql`
    query Tasks($where: TaskWhereInput) {
      tasks(where: $where) {
        TaskID
        Title
        Completed
        Description
        DueDate
        Type
      }
    }
  `

  const variables = {
    where: {
      FK_FlowID: {
        equals: flowId,
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.tasks) {
    return {
      flowTasks: !courseOnTermInjection
        ? data.tasks
        : data.tasks.map((task: FlowTask) => ({
            ...task,
            FK_CourseOnTerm: courseOnTermInjection,
          })),
      flowTasksLoading: false,
      flowTasksError: null,
      mutateFlowTasks: mutate,
    }
  }

  if (data?.mutate) {
    return {
      flowTasks: !courseOnTermInjection
        ? data.tasks
        : data.tasks.map((task: FlowTask) => ({
            ...task,
            FK_CourseOnTerm: courseOnTermInjection,
          })),
      flowTasksLoading: false,
      flowTasksError: null,
      mutateFlowTasks: mutate,
    }
  }

  return {
    flowTasks: [] as FlowTask[],
    flowTasksLoading: !data && !error,
    flowTasksError: error,
    mutateFlowTasks: mutate,
  }
}
