import classnames from 'classnames'
import { CourseDisplay } from 'components/Dashbar/CourseNavs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Skeleton from 'react-loading-skeleton'

interface Props {
  index: number
  course: CourseDisplay
  current: boolean
  loading: boolean
}

export default function CourseLine({ index, course, current, loading }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Draggable key={course.name} draggableId={course.name} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          key={index}
          className={classnames(
            {
              'text-gray-700 hover:text-gray-900 hover:bg-gray-50':
                !current && theme === 'light',
            },
            { 'hover:bg-slate-700': !current && theme === 'dark' },
            { 'bg-gray-200': current && theme === 'light' },
            { 'bg-slate-600': current && theme === 'dark' },
            'group flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md cursor-pointer',
          )}
        >
          <div
            className="flex self-center items-center"
            style={{ marginLeft: '0.15rem' }}
          >
            {!loading ? (
              <span
                className={classnames(
                  course.bgColorClass,
                  'w-2.5 h-2.5 mr-4 mt-0.5 rounded-full',
                )}
                style={{ marginRight: '1.125rem' }}
              />
            ) : (
              <Skeleton className="w-2.5 h-2.5 mr-4" circle />
            )}
            {!loading ? <span>{course.name}</span> : <Skeleton width={150} />}
          </div>

          {/* <kbd
            className={classnames('kbd kbd-xs w-5 text-xs', {
              '': theme === 'dark',
            })}
          >
            {index + 1}
          </kbd> */}
        </div>
      )}
    </Draggable>
  )
}