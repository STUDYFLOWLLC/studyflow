import request, { gql } from 'graphql-request'
import { TaskType } from 'types/Task'

export async function archiveTask(taskId: string, completed: boolean) {
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

export async function deleteTask(taskId: string, isBringBack?: boolean) {
  const mutation = gql`
    mutation Mutation($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
      updateTask(data: $data, where: $where) {
        TaskID
      }
    }
  `

  const variables = {
    data: {
      DeletedTime: {
        set: isBringBack ? null : new Date().toISOString(),
      },
    },
    where: {
      TaskID: taskId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)

  return data
}

export async function editTask(
  taskId: string,
  title: string,
  description: string,
  dueDate: string | undefined,
  email: string,
  courseOnTermId: number,
  type: TaskType | undefined,
) {
  const mutation = gql`
    mutation EditTask($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
      updateTask(data: $data, where: $where) {
        Title
      }
    }
  `

  const variables = {
    data: {
      Title: {
        set: title,
      },
      Description: {
        set: description,
      },
      DueDate: {
        set: dueDate,
      },
      FK_CourseOnTerm: {
        connect: {
          CourseOnTermID: courseOnTermId,
        },
      },
      Type: {
        set: type,
      },
    },
    where: {
      TaskID: taskId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)

  return data
}

export async function editTaskCourse(taskId: string, newCourseId: number) {
  const mutation = gql`
    mutation Mutation($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
      updateTask(data: $data, where: $where) {
        TaskID
      }
    }
  `

  const variables = {
    data: {
      FK_CourseOnTerm: {
        connect: {
          CourseOnTermID: newCourseId,
        },
      },
    },
    where: {
      TaskID: taskId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export function deleteManyTask(taskIds: string[]) {
  const mutation = gql`
    mutation Mutation(
      $data: TaskUpdateManyMutationInput!
      $where: TaskWhereInput
    ) {
      updateManyTask(data: $data, where: $where) {
        count
      }
    }
  `

  const variables = {
    data: {
      DeletedTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      TaskID: {
        in: taskIds,
      },
    },
  }

  return request('/api/graphql', mutation, variables)
}
