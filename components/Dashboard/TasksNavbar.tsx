import {
  CalendarIcon,
  CollectionIcon,
  FolderIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const tasksDisplays = ['Today', 'Calendar', 'Courses']
const tasksDisplaysIcons = [
  <CollectionIcon key="collection" className="w-4 mr-1" />,
  <CalendarIcon key="calendar" className="w-4 mr-1" />,
  <FolderIcon key="folder" className="w-4 mr-1" />,
]

interface Props {
  taskView: string
  setTaskView: (taskView: string) => void
}

export default function TasksNavbar({ taskView, setTaskView }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="absolute bottom-0">
      <div className="flex ml-14">
        <span className="ml-4">|</span>
        {tasksDisplays.map((taskDisplay) => (
          <span
            key={taskDisplay}
            className={classNames(
              {
                'border-b-2 border-primary text-black font-medium':
                  taskDisplay === taskView && theme === 'light',
              },
              {
                'hover:cursor-pointer hover:text-black text-gray-500 hover:border-b-2 hover:border-gray-300':
                  taskDisplay !== taskView && theme === 'light',
              },
              {
                'border-b-2 border-primary font-medium text-gray-100':
                  taskDisplay === taskView && theme === 'dark',
              },
              {
                'hover:cursor-pointer hover:text-default hover:border-b-2 hover:border-gray-300':
                  taskDisplay !== taskView && theme === 'dark',
              },
              'flex mx-3 pb-4 items-center',
            )}
            onClick={() => setTaskView(taskDisplay)}
            onKeyDown={() => setTaskView(taskDisplay)}
          >
            {tasksDisplaysIcons[tasksDisplays.indexOf(taskDisplay)]}
            <span>{taskDisplay}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
