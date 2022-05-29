import { PlusCircleIcon } from '@heroicons/react/outline'
import CourseLine from 'components/Dashbar/CourseLine'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

interface Props {
  loading: boolean
}

export interface CourseDisplay {
  name: string
  href: string
  bgColorClass: string
  loading: boolean
}

export default function CourseNavs({ loading }: Props) {
  const [teams, setTeams] = useState<CourseDisplay[]>([
    {
      name: 'Linear Algebra',
      href: '#',
      bgColorClass: 'bg-indigo-500',
      loading,
    },
    { name: '2110', href: '#', bgColorClass: 'bg-green-500', loading },
    { name: 'Discrete', href: '#', bgColorClass: 'bg-orange-500', loading },
    { name: 'Cog Sci', href: '#', bgColorClass: 'bg-blue-500', loading },
    { name: 'Bio', href: '#', bgColorClass: 'bg-yellow-500', loading },
  ])

  const reorder = (
    list: CourseDisplay[],
    startIndex: number,
    endIndex: number,
  ) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newTeams: CourseDisplay[] = reorder(
      teams,
      result.source.index,
      result.destination ? result.destination.index : 0,
    )

    setTeams(newTeams)
  }

  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(process.browser)
  })

  return (
    <div className="mt-6">
      <div className="w-100 flex items-center justify-between">
        <div>
          <p className="px-2 text-xs font-semibold text-gray-500 tracking-wider">
            Courses
          </p>
        </div>
        <PlusCircleIcon
          className="text-gray-500 cursor-pointer"
          style={{ width: '1.125rem' }}
        />
      </div>

      {isBrowser ? (
        <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="courses">
            {(provided) => (
              <div
                className="mt-1 space-y-1"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {teams.map((course, index) => (
                  <CourseLine
                    key={course.name}
                    index={index}
                    course={course}
                    loading={loading}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : null}
    </div>
  )
}
