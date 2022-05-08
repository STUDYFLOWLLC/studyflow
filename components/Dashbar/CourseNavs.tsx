import { PlusIcon } from '@heroicons/react/outline'
import CourseLine from 'components/Dashbar/CourseLine'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

export interface CourseDisplay {
  name: string
  href: string
  bgColorClass: string
}

export default function CourseNavs() {
  const [teams, setTeams] = useState<CourseDisplay[]>([
    { name: 'MATH2210', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'CS2100', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'CS2800', href: '#', bgColorClass: 'bg-orange-500' },
    { name: 'COGST1101', href: '#', bgColorClass: 'bg-blue-500' },
    { name: 'BIOEE1780', href: '#', bgColorClass: 'bg-yellow-500' },
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
    <div className="mt-8">
      <div className="w-100 flex self-center justify-between">
        <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Courses
        </p>
        <PlusIcon className="w-3.5 mb-.5 text-gray-500 cursor-pointer" />
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
                  <CourseLine key={course.name} index={index} course={course} />
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
