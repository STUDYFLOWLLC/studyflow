import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import CourseDropdown from 'components/dropdowns/CourseDropdown'
import DateDropdown from 'components/dropdowns/DateDropdown'
import TaskNameInput from 'components/Tasks/AddTask/TaskNameInput'
import TypeDropdown from 'components/Tasks/AddTask/TypeDropdown'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TaskType } from 'types/Task'

interface Props {
  oldName: string
  oldDescription: string
  oldDueDate: string
  oldCourse: {
    CourseOnTermID: number
    Color: string | undefined
    Nickname: string
    FK_Course: {
      Code: string | undefined
    }
  }
  oldType: TaskType | undefined
  taskId: string
  setEditing: (editing: boolean) => void
}

export default function EditTask({
  oldName,
  oldDescription,
  oldDueDate,
  oldCourse,
  oldType,
  taskId,
  setEditing,
}: Props) {
  const { theme } = useTheme()

  // Retrieving tasks and courses from backend
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  // States
  const [mounted, setMounted] = useState(false)
  const [taskName, setTaskName] = useState(oldName)
  const [taskDescription, setTaskDescription] = useState(oldDescription)
  const [taskDueDateExact, setTaskDueDateExact] = useState<Date | undefined>(
    new Date(oldDueDate) || undefined,
  )
  const [taskCourse, setTaskCourse] = useState(oldCourse?.CourseOnTermID || 0)
  const [courseDropDownTitle, setCourseDropDownTitle] = useState(
    oldCourse?.Nickname || oldCourse?.FK_Course.Code || 'General',
  )
  const [taskType, setTaskType] = useState<TaskType | undefined>(oldType)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const editTaskLocal = async () => {
    // manufacture new task
    const newTask = {
      CreatedTime: new Date().toISOString(),
      Title: taskName,
      TaskID: taskId,
      Description: taskDescription,
      DueDate: taskDueDateExact?.toISOString(),
      Type: taskType,
      FK_CourseOnTermID: taskCourse,
      FK_CourseOnTerm: {
        CourseOnTermID: taskCourse,
        Color: coursesOnTerm.find(
          (course) => course.CourseOnTermID === taskCourse,
        )?.Color,
        Nickname: courseDropDownTitle,
        FK_Course: {
          Code: courseDropDownTitle,
        },
      },
    }

    mutateTasks(
      {
        mutate: true,
        tasks: [...tasks, newTask],
      },
      {
        revalidate: false,
        populateCache: true,
      },
    )
  }

  return (
    <div className="flex flex-col border-gray-400 border rounded-md">
      <div className="pt-1 px-1 flex flex-col">
        <TaskNameInput
          setTaskName={setTaskName}
          setTaskDueDateExact={setTaskDueDateExact}
          dueDate={taskDueDateExact}
        />
        <textarea
          rows={1}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="border-none focus:ring-0 bg-transparent placeholder:text-gray-400 text-sm resize-none caret-black"
          placeholder="Description"
          value={taskDescription}
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
              name: course.Nickname || course.FK_Course.Code,
              handler: () => {
                setTaskCourse(course.CourseOnTermID)
                setCourseDropDownTitle(course.Nickname || course.FK_Course.Code)
              },
            }))}
            title={
              oldCourse?.Nickname || oldCourse?.FK_Course.Code || 'General'
            }
            hasGeneral
            loading={coursesOnTermLoading}
            generalHandler={() => {
              setTaskCourse(0)
              setCourseDropDownTitle('General')
            }}
            color={oldCourse?.Color}
          />
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
              setEditing(false)
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
            // onClick={() => {
            //   if (taskName) {
            //     addTask()
            //   }
            // }}
            // onKeyDown={() => {
            //   if (taskName) {
            //     addTask()
            //   }
            // }}
          >
            <div>Edit</div>
          </button>
        </span>
      </div>
    </div>
  )
}
