import Checkbox from 'components/Tasks/DisplayTasks/BasicDisplayTasks/Checkbox'
import CourseIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/CourseIcon'
import DateIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DateIcon'
import DeleteTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DeleteTask'
import { Task } from 'hooks/tasks/useTasks'
import { Toaster } from 'react-hot-toast'

interface Props {
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
}

export default function BasicDisplayTasks({ archiveTaskLocal, tasks }: Props) {
  const tasksToMap = tasks.filter((task) => !task.Completed)

  return (
    <div className="w-full">
      <Toaster />
      {tasksToMap.map((task) => (
        <div
          className="border border-gray-300 rounded-lg shadow-md p-2 mb-2"
          key={task.TaskID}
        >
          <div className="flex">
            <Checkbox
              TaskID={task.TaskID}
              archiveTaskLocal={archiveTaskLocal}
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="text-lg font-medium">{task.Title}</div>
                <DeleteTask task={task} />
              </div>
              <div className="font-light">{task.Description}</div>
              <div className="flex justify-between">
                <DateIcon date={task.DueDate} />
                <span className="flex justify-end mr-1">
                  <CourseIcon courseOnTerm={task.FK_CourseOnTerm} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}