import { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function CourseNavs() {
  const [teams, setTeams] = useState([
    { name: 'MATH2210', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'CS2100', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'CS2800', href: '#', bgColorClass: 'bg-orange-500' },
    { name: 'COGST1101', href: '#', bgColorClass: 'bg-blue-500' },
    { name: 'BIOEE1780', href: '#', bgColorClass: 'bg-yellow-500' }
  ])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newTeams = reorder(
      teams,
      result.source.index,
      result.destination.index
    )

    setTeams(newTeams)
    console.log(newTeams)
  }

  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(process.browser)
  })

  return (
    <div className="mt-8">
      <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Courses
      </h3>
      {isBrowser ? (
        <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="courses">
            {(provided, snapshot) => (
              <div
                className="mt-1 space-y-1"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {teams.map((team, index) => (
                  <Draggable
                    key={team.name}
                    draggableId={team.name}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        key={index}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        <span
                          className={classNames(
                            team.bgColorClass,
                            'w-2.5 h-2.5 mr-4 rounded-full'
                          )}
                        />
                        <span>{team.name}</span>
                      </div>
                    )}
                  </Draggable>
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
