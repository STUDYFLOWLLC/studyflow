import Checkbox from 'components/Tasks/DisplayTasks/Checkbox'
import CourseDisplay from 'components/Tasks/DisplayTasks/CourseDisplay'
import DateDisplay from 'components/Tasks/DisplayTasks/DateDisplay'
import DeleteTask from 'components/Tasks/DisplayTasks/DeleteTask'
import { Task } from 'hooks/tasks/useTasks'

interface Props {
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
}

export default function BasicDisplayTasks({ archiveTaskLocal, tasks }: Props) {
  tasks.map((task) => {
    console.log(task.DueDate)
    return 0
  })
  return (
    <ul>
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
                    <DeleteTask />
                  </div>
                  <div className="font-light">{task.Description}</div>
                  {/* <div>{task.DueDate}</div> */}
                  <div className="flex justify-between">
                    <DateDisplay />
                    <CourseDisplay />
                  </div>
                </div>
              </div>
            </li>
          ),
      )}
    </ul>
  )
}
