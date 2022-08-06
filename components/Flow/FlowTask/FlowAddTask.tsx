/* eslint-disable no-underscore-dangle */
import { PlusIcon } from '@heroicons/react/solid'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import CourseDropdown from 'components/dropdowns/CourseDropdown'
import DateDropdown from 'components/dropdowns/DateDropdown'
import TaskNameInput from 'components/Tasks/AddTask/TaskNameInput'
import TypeDropdown from 'components/Tasks/AddTask/TypeDropdown'
import useFlowDetails, { SmallCourse } from 'hooks/flows/useFlowDetails'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import addTask from 'hooks/tasks/handleTask'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { TaskType } from 'types/Task'
import FlowTaskButton from './FlowTaskButton'

interface Props {
  flowId: string
  flowTitle: string
  courseOnTerm?: SmallCourse
  dueDate?: Date
}

export default function index({
  flowId,
  flowTitle,
  courseOnTerm,
  dueDate,
}: Props) {
  const { theme } = useTheme()

  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0].TermID,
  )
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  // States
  const [mounted, setMounted] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDueDateExact, setTaskDueDateExact] = useState<Date | undefined>(
    dueDate || undefined,
  )
  const [showMain, setShowMain] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [taskType, setTaskType] = useState<TaskType | undefined>(undefined)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const addTaskWithLocal = async () => {
    addTask(
      taskName,
      taskDescription,
      taskDueDateExact,
      taskType,
      courseOnTerm?.CourseOnTermID || 0,
      user?.email || user?.user_metadata.email || '',
      tasks,
      mutateTasks,
      coursesOnTerm,
      flowDetails,
      mutateFlowDetails,
    )

    // reset local state
    setShowMain(false)
    setShowAddTask(false)
    setTaskName('')
    setTaskDescription('')
    setTaskDueDateExact(dueDate || undefined)
    setTaskType(undefined)
  }

  return (
    <div>
      {!showMain && (
        <div
          className={classNames(
            { 'cursor-pointer': showAddTask },
            'flex items-center',
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
                  showAddTask && theme === 'light',
              },
              {
                'text-black border rounded-full border-transparent bg-white':
                  showAddTask && theme === 'dark',
              },
              'w-5 h-5 mr-3 font-thin',
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
        <div className="flex flex-col border-gray-400 border rounded-md">
          <div className="pt-1 px-1 flex flex-col">
            <TaskNameInput
              theme={theme || 'light'}
              taskName={taskName}
              setTaskName={setTaskName}
              setTaskDueDateExact={setTaskDueDateExact}
              addTask={addTaskWithLocal}
              defaultDate={dueDate}
              setTaskType={setTaskType}
            />
            <textarea
              rows={1}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="border-none focus:ring-0 bg-transparent placeholder:text-gray-400 text-sm resize-none caret-black"
              placeholder="Description"
            />
          </div>
          <div className="w-full border-t border-gray-300" />
          <div className="flex justify-between mx-2 my-1">
            <span className="flex items-center">
              <DateDropdown
                taskDueDateExact={taskDueDateExact}
                setTaskDueDateExact={setTaskDueDateExact}
              />
              <CourseDropdown
                items={coursesOnTerm.map((course) => ({
                  color: course.Color,
                  name: course.Nickname || course.FK_Course?.Code || '',
                }))}
                title={
                  courseOnTerm?.Nickname || courseOnTerm?.FK_Course?.Code || ''
                }
                loading={coursesOnTermLoading}
                color={courseOnTerm?.Color}
                disabled
              />
              <FlowTaskButton title={flowTitle} />
              <TypeDropdown taskType={taskType} setTaskType={setTaskType} />
            </span>
            <span className="flex space-x-2 items-center">
              <button
                type="button"
                className={classNames(
                  {
                    'bg-gray-100 hover:bg-gray-200': theme === 'light',
                  },
                  {
                    'bg-slate-500 hover:bg-slate-700 text-gray-100':
                      theme === 'dark',
                  },
                  'px-3.5 py-1.5 items-center cursor-pointer transition rounded-md  font-medium',
                )}
                onClick={() => {
                  setShowMain(false)
                  setShowAddTask(false)
                  setTaskName('')
                  setTaskDescription('')
                  setTaskDueDateExact(dueDate || undefined)
                  setTaskType(undefined)
                }}
              >
                <div>Cancel</div>
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'bg-gray-400 text-white cursor-default':
                      !taskName && theme === 'light',
                  },
                  {
                    'bg-slate-700 text-default cursor-default':
                      !taskName && theme === 'dark',
                  },
                  {
                    'bg-gray-700 text-white hover:bg-black cursor-pointer':
                      taskName && theme === 'light',
                  },
                  {
                    'bg-slate-600 hover:bg-primary/80 text-gray-100 cursor-pointer':
                      taskName && theme === 'dark',
                  },
                  'px-3.5 py-1.5 item-center transition rounded-md font-medium ',
                )}
                onClick={() => {
                  if (taskName) {
                    addTaskWithLocal()
                  } else {
                    toast.error('Task name is required')
                  }
                }}
                onKeyDown={() => {
                  if (taskName) {
                    addTaskWithLocal()
                  } else {
                    toast.error('Task name is required')
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
