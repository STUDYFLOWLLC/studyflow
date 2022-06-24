/* eslint-disable @typescript-eslint/no-explicit-any */

import { PlusIcon } from '@heroicons/react/solid'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CourseDropdown from 'components/dropdowns/CourseDropdown'
import DateDropdown from 'components/dropdowns/DateDropdown'
import TaskNameInput from 'components/Tasks/AddTask/TaskNameInput'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import makeTask from 'hooks/tasks/makeTask'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import { KeyedMutator } from 'swr'

interface Props {
  user: User
  tasks: Task[]
  mutateTasks: KeyedMutator<any>
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
}

export default function index({
  user,
  tasks,
  mutateTasks,
  coursesOnTerm,
  coursesOnTermLoading,
}: Props) {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDueDateExact, setTaskDueDateExact] = useState<Date | undefined>()
  const [taskCourse, setTaskCourse] = useState(0)
  const [courseDropDownTitle, setCourseDropDownTitle] = useState('Course')
  const [showMain, setShowMain] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = async () => {
    mutateTasks(
      {
        tasks: [
          ...tasks,
          {
            CreatedTime: new Date().toISOString(),
            Title: taskName,
            TaskID: 0,
            Description: taskDescription,
            DueDate: taskDueDateExact?.toISOString(),
            FK_CourseOnTermID: taskCourse,
          },
        ],
        mutate: true,
      },
      {
        revalidate: false,
      },
    )

    const data = makeTask(
      taskName,
      taskDescription,
      taskDueDateExact?.toISOString(),
      user.email || user.user_metadata.email,
      taskCourse,
    )
  }

  return (
    <div>
      {!showMain && (
        <div
          className={classNames(
            { 'cursor-pointer': showAddTask },
            'flex mt-3 ml-4',
          )}
          onClick={() => setShowMain(!showMain)}
          onKeyDown={() => setShowMain(!showMain)}
          onMouseEnter={() => setShowAddTask(true)}
          onMouseLeave={() => setShowAddTask(false)}
        >
          <span
            className={classNames(
              {
                'text-white border rounded-full border-transparent bg-black':
                  showAddTask,
              },
              'w-5 h-5 mr-3 font-thin mt-0.5',
            )}
          >
            <PlusIcon />
          </span>
          <span
            className={classNames({
              'text-gray-400': !showAddTask,
            })}
          >
            Add Task
          </span>
        </div>
      )}
      {showMain && (
        <div className="mt-3 ml-4 border border-gray-400 rounded-md p-1 flex flex-col">
          <TaskNameInput
            setTaskName={setTaskName}
            setTaskDueDateExact={setTaskDueDateExact}
          />
          <textarea
            rows={2}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="border-none focus:ring-0 placeholder:text-gray-400 text-sm mb-1 resize-none"
            placeholder="Description"
          />
          <div className="w-full border-t border-gray-300 mt-1 mb-1" />
          <div className="flex justify-between">
            <span className="flex items-center">
              <DateDropdown
                taskDueDateExact={taskDueDateExact}
                setTaskDueDateExact={setTaskDueDateExact}
              />
              <CourseDropdown
                items={coursesOnTerm.map((course) => ({
                  color: course.Color,
                  name: course.Nickname || course.FK_Course.Code,
                  handler: () => {
                    setTaskCourse(course.CourseOnTermID)
                    setCourseDropDownTitle(
                      course.Nickname || course.FK_Course.Code,
                    )
                  },
                }))}
                title={courseDropDownTitle}
                hasGeneral
                loading={coursesOnTermLoading}
                generalHandler={() => {
                  setTaskCourse(0)
                  setCourseDropDownTitle('General')
                }}
              />
            </span>
            <span className="flex justify-end space-x-2 items-center">
              <button
                type="button"
                className="px-3.5 py-1.5 items-center cursor-pointer transition rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                onClick={() => {
                  setShowMain(false)
                  setShowAddTask(false)
                  setCourseDropDownTitle('Course')
                  setTaskCourse(0)
                  setTaskDueDateExact(undefined)
                }}
              >
                <div>Cancel</div>
              </button>
              <button
                type="button"
                className={classNames(
                  { 'bg-gray-400 cursor-default': !taskName },
                  {
                    'bg-gray-700 hover:bg-black cursor-pointer': taskName,
                  },
                  'px-3.5 py-1.5 item-center transition rounded-md  font-medium text-white',
                )}
                onClick={() => {
                  if (taskName) {
                    addTask()
                    setShowMain(false)
                  }
                }}
                onKeyDown={() => {
                  if (taskName) {
                    addTask()
                    setShowMain(false)
                  }
                }}
              >
                <div>Add task</div>
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
