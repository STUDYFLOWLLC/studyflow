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

export async function deleteTask(taskId: string) {
  const mutation = gql`
    mutation Mutation($where: TaskWhereUniqueInput!) {
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
