import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import AddTask from 'components/Tasks/AddTask'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import CourseListDropdown from 'components/Tasks/DisplayTasks/CourseListView/CourseListDropdown'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  user: User
}

export default function TodayView({ user }: Props) {
  const [showGeneral, setShowGeneral] = useState(false)

  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  // Number of tasks in general
  const numTasksGeneral = tasks.filter(
    (task) => !task.FK_CourseOnTermID && !task.Completed,
  ).length

  return (
    <div className="flex flex-col w-10/12 mt-6 mb-16">
      {/* Map of Each Class Dropdown-Display */}
      {coursesOnTerm.map((course) => (
        <CourseListDropdown
          key={course.CourseOnTermID}
          course={course}
          user={user}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
        />
      ))}

      {/* General Dropdown-Display.
          Replicates CourseListDropdown but for General. showGeneral lives in this file */}
      <div className="flex justify-between">
        <span className="flex items-center mb-2">
          {showGeneral ? (
            <ChevronDownIcon
              className="w-9 h-9 border border-transparent bg-transparent hover:bg-gray-200 hover:cursor-pointer rounded-md p-1.5 mr-1"
              onClick={() => setShowGeneral(false)}
              onKeyDown={() => setShowGeneral(false)}
            />
          ) : (
            <ChevronRightIcon
              className="w-9 h-9 border border-transparent bg-transparent hover:bg-gray-200 hover:cursor-pointer rounded-md p-1.5 mr-1"
              onClick={() => setShowGeneral(true)}
              onKeyDown={() => setShowGeneral(true)}
            />
          )}
          <span className="font-bold">General</span>
        </span>
        <span className="text-xs text-gray-400 mt-3">
          {numTasksGeneral} {numTasksGeneral === 1 ? 'Task' : 'Tasks'}
        </span>
      </div>

      {showGeneral && (
        <BasicDisplayTasks
          tasks={tasks.filter((task) => task.FK_CourseOnTermID === 0)}
        />
      )}
      {showGeneral && (
        <div className="mb-3 mt-1">
          <AddTask
            user={user}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
            general
          />
        </div>
      )}
    </div>
  )
}
