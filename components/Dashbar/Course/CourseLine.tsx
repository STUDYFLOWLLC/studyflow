import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Skeleton from 'react-loading-skeleton'
import { TOOLTIP_OFFSET } from 'types/Magic'

interface Props {
  index: number
  course: CourseOnTerm
  current: boolean
  loading: boolean
}

export default function CourseLine({ index, course, current, loading }: Props) {
  const router = useRouter()
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  const rand = Math.floor(Math.random() * 100)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Draggable
      key={course.FK_Course?.Code || rand.toString()}
      draggableId={course.FK_Course?.Code || rand.toString()}
      index={index}
    >
      {(provided, snapshot) => (
        <Tippy
          delay={[1000, 100]}
          offset={TOOLTIP_OFFSET}
          placement="right"
          content="Drag to reorder or click to navigate"
        >
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            key={index}
            className={classNames(
              {
                'text-gray-700 hover:text-gray-900 hover:bg-gray-50':
                  !current && theme === 'light',
              },
              { 'hover:bg-slate-700': !current && theme === 'dark' },
              { 'bg-gray-200': current && theme === 'light' },
              { 'bg-slate-600': current && theme === 'dark' },
              'group flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md cursor-pointer',
            )}
            onClick={() => router.push(`/dash#${course.CourseOnTermID}`)}
            onKeyDown={() => router.push(`/dash#${course.CourseOnTermID}`)}
          >
            <div
              className="flex self-center items-center"
              style={{ marginLeft: '0.15rem' }}
            >
              {!loading ? (
                <span
                  className={classNames(
                    course.Color,
                    'w-2.5 h-2.5 mr-4 mt-0.5 rounded-full',
                  )}
                  style={{ marginRight: '1.125rem' }}
                />
              ) : (
                <Skeleton className="w-2.5 h-2.5 mr-4" circle />
              )}
              {!loading ? (
                <span>{course.Nickname || course.FK_Course?.Code}</span>
              ) : (
                <Skeleton width={150} />
              )}
            </div>

            {/* <kbd
            className={classnames('kbd kbd-xs w-5 text-xs', {
              '': theme === 'dark',
            })}
          >
            {index + 1}
          </kbd> */}
          </div>
        </Tippy>
      )}
    </Draggable>
  )
}
