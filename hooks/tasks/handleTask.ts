/* eslint-disable @typescript-eslint/no-explicit-any */
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { KeyedMutator } from 'swr'
import { TaskType } from 'types/Task'
import { v4 as uuid } from 'uuid'
import makeTask from './makeTask'

export default function addTask(
  taskName: string,
  taskDescription: string,
  taskDueDate: Date | undefined,
  taskType: TaskType | undefined,
  taskCourseId: number,
  email: string,
  tasks: Task[],
  mutateTasks: KeyedMutator<any>,
  coursesOnTerm: CourseOnTerm[],
) {
  const taskId = uuid()
  const realDueDate = (taskDueDate || new Date()).toISOString()
  const taskCourse = coursesOnTerm.find(
    (cot) => cot.CourseOnTermID === taskCourseId,
  )

  // manufacture new task
  const newTask = {
    CreatedTime: new Date().toISOString(),
    Title: taskName,
    TaskID: taskId,
    Description: taskDescription,
    DueDate: realDueDate,
    Type: taskType,
    FK_CourseOnTermID: taskCourseId,
    FK_CourseOnTerm: {
      ...taskCourse,
    },
  }

  // mutate in backend
  makeTask(
    taskId,
    taskName,
    taskDescription,
    realDueDate,
    email,
    taskCourseId,
    taskType,
  )

  // mutate locally
  mutateTasks(
    {
      tasks: [...tasks, newTask],
      mutate: true,
    },
    {
      revalidate: false,
      populateCache: true,
    },
  )
}
