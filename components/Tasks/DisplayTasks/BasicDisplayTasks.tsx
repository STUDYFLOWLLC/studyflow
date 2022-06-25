import Checkbox from 'components/Tasks/DisplayTasks/Checkbox'
import CourseDisplay from 'components/Tasks/DisplayTasks/CourseDisplay'
import DateDisplay from 'components/Tasks/DisplayTasks/DateDisplay'
import DeleteTask from 'components/Tasks/DisplayTasks/DeleteTask'
import { Task } from 'hooks/tasks/useTasks'
import { Toaster } from 'react-hot-toast'

interface Props {
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
}

export default function BasicDisplayTasks({ archiveTaskLocal, tasks }: Props) {
  // tasks.map((task) => {
  //   console.log(task.FK_CourseOnTermID)
  //   return 0
  // })
  return (
    <ul>
      <Toaster />
      {tasks.map(
        (task) =>
          !task.Completed && (
            <li
              className="border border-gray-300 rounded-lg shadow-md p-2 m-3"
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
                  {/* <div>{task.DueDate}</div> */}
                  <span className="flex justify-start">
                    {task.DueDate && <DateDisplay />}
                  </span>
                  <span className="flex justify-end mr-1">
                    <CourseDisplay course={task.FK_CourseOnTermID} />
                  </span>
                </div>
              </div>
            </li>
          ),
      )}
    </ul>
  )
}
