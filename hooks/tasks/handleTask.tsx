/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FlowDetail } from 'hooks/flows/useFlowDetails'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { Fragment } from 'react'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { Repetition } from 'types/Repetition'
import { TaskType } from 'types/Task'
import { v4 as uuid } from 'uuid'
import makeTask from './makeTask'
import { archiveTask, deleteTask } from './mutateTask'

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
  flowDetails?: FlowDetail | null,
  mutateFlowDetails?: KeyedMutator<any>,
  newAdd?: boolean,
) {
  const taskId = uuid()
  const realDueDate = (taskDueDate || new Date()).toISOString()
  const taskCourse = coursesOnTerm.find(
    (cot) => cot.CourseOnTermID === taskCourseId,
  ) || {
    CourseOnTermID: 0,
    Color: '',
    Nickname: 'General',
    FK_Course: {
      Code: '',
    },
  }

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
    flowDetails?.FlowID,
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
  if (flowDetails && mutateFlowDetails) {
    mutateFlowDetails(
      {
        mutatedFlow: {
          ...flowDetails,
          FK_Tasks: [...(flowDetails?.FK_Tasks || []), newTask],
          _count: {
            ...flowDetails?._count,
            FK_Tasks: (flowDetails?._count?.FK_Tasks || 0) + 1,
          },
        },
        mutate: true,
      },
      {
        revalidate: false,
      },
    )
  }

  toast.success(`Task added to ${taskCourse.Nickname}`)
}

export async function completeOrUncompleteTask(
  taskId: string,
  newCompletion: boolean,
  tasks: Task[],
  mutateTasks: KeyedMutator<any>,
  hideUndo?: boolean,
  repetitionDetails?: Repetition | null,
  mutateRepetitionDetails?: KeyedMutator<any>,
  flowDetails?: FlowDetail | null,
  mutateFlowDetails?: KeyedMutator<any>,
) {
  // mutate in backend
  archiveTask(taskId, newCompletion)

  // mutate locally
  mutateTasks(
    {
      mutate: true,
      tasks: tasks.map((task) => {
        if (task.TaskID === taskId) {
          return {
            ...task,
            Completed: newCompletion,
          }
        }
        return task
      }),
    },
    { revalidate: false, populateCache: true },
  )

  if (repetitionDetails && mutateRepetitionDetails) {
    mutateRepetitionDetails(
      {
        mutate: true,
        newRepetition: {
          ...repetitionDetails,
          FK_Tasks: repetitionDetails?.FK_Tasks.map((task) => {
            if (task.TaskID === taskId) {
              return {
                ...task,
                Completed: newCompletion,
              }
            }
            return task
          }),
        },
      },
      {
        revalidate: false,
        populateCache: true,
      },
    )
  }

  if (flowDetails && mutateFlowDetails) {
    mutateFlowDetails({
      mutate: true,
      mutatedFlow: {
        ...flowDetails,
        FK_Tasks: flowDetails?.FK_Tasks.map((task) => {
          if (task.TaskID === taskId) {
            return {
              ...task,
              Completed: newCompletion,
            }
          }
          return task
        }),
      },
    })
  }

  let show = true

  if (!hideUndo)
    toast.custom(
      (t) =>
        show ? (
          <Transition
            show={t.visible}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className="animate-enter transition-all max-w-sm w-full bg-base-100 shadow-lg rounded-lg pointer-events-auto ring-1 ring-base-100 ring-opacity-5 overflow-hidden"
              style={{
                ...t.style,
                animation: 'cubic-bezier(0.1, 0.7, 1.0, 0.1) 1s ease',
              }}
            >
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-0 flex-1 flex justify-between">
                    <p className="w-0 flex-1 text-sm font-medium">
                      {`Task ${newCompletion ? 'completed' : 'uncompleted'}`}
                    </p>
                    <button
                      type="button"
                      className="ml-3 flex-shrink-0 bg-base-100 rounded-md text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => {
                        show = false
                        toast.dismiss()
                        completeOrUncompleteTask(
                          taskId,
                          !newCompletion,
                          tasks,
                          mutateTasks,
                          hideUndo,
                          repetitionDetails,
                          mutateRepetitionDetails,
                        )
                      }}
                      onKeyDown={() => {
                        show = false
                        toast.dismiss()
                        completeOrUncompleteTask(
                          taskId,
                          !newCompletion,
                          tasks,
                          mutateTasks,
                          hideUndo,
                          repetitionDetails,
                          mutateRepetitionDetails,
                        )
                      }}
                    >
                      Undo
                    </button>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-base-100 rounded-md inline-flex text-info/80 hover:text-info focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => {
                        toast.dismiss()
                        show = false
                      }}
                      onKeyDown={() => {
                        toast.dismiss()
                        show = false
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ) : null,
      {
        position: 'bottom-right',
      },
    )
}

export async function deleteOrUndeleteTask(
  task: Task,
  newDeletion: boolean,
  tasks: Task[],
  mutateTasks: KeyedMutator<any>,
  flowDetails?: FlowDetail | null,
  mutateFlowDetails?: KeyedMutator<any>,
  hideUndo?: boolean,
) {
  // mutate in backend
  deleteTask(task.TaskID, !newDeletion)

  console.log(tasks.length)
  const newTasks = newDeletion
    ? tasks.filter((t) => t.TaskID !== task.TaskID)
    : [...tasks, task]

  console.log(newTasks.length)
  // mutate locally
  await mutateTasks(
    {
      mutate: true,
      tasks: [...newTasks],
    },
    { revalidate: false },
  )

  if (flowDetails && mutateFlowDetails) {
    mutateFlowDetails(
      {
        mutate: true,
        mutatedFlow: {
          ...flowDetails,
          FK_Tasks: flowDetails?.FK_Tasks.filter(
            (t) => t.TaskID !== task.TaskID,
          ),
        },
      },
      {
        revalidate: false,
      },
    )
  }

  let show = true

  if (!hideUndo)
    toast.custom(
      (t) =>
        show ? (
          <Transition
            show={t.visible}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className="animate-enter transition-all max-w-sm w-full bg-base-100 shadow-lg rounded-lg pointer-events-auto ring-1 ring-base-100 ring-opacity-5 overflow-hidden"
              style={{
                ...t.style,
                animation: 'cubic-bezier(0.1, 0.7, 1.0, 0.1) 1s ease',
              }}
            >
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-0 flex-1 flex justify-between">
                    <p className="w-0 flex-1 text-sm font-medium">
                      {`Task ${newDeletion ? 'deleted' : 'undeleted'}`}
                    </p>
                    <button
                      type="button"
                      className="ml-3 flex-shrink-0 bg-base-100 rounded-md text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => {
                        show = false
                        toast.dismiss()
                        deleteOrUndeleteTask(
                          task,
                          !newDeletion,
                          newTasks,
                          mutateTasks,
                          flowDetails,
                          mutateFlowDetails,
                          hideUndo,
                        )
                      }}
                      onKeyDown={() => {
                        show = false
                        toast.dismiss()
                        deleteOrUndeleteTask(
                          task,
                          !newDeletion,
                          newTasks,
                          mutateTasks,
                          flowDetails,
                          mutateFlowDetails,
                          hideUndo,
                        )
                      }}
                    >
                      Undo
                    </button>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-base-100 rounded-md inline-flex text-info/80 hover:text-info focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => {
                        toast.dismiss()
                        show = false
                      }}
                      onKeyDown={() => {
                        toast.dismiss()
                        show = false
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ) : null,
      {
        position: 'bottom-right',
      },
    )
}
