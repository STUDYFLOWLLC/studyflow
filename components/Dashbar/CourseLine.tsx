import classnames from 'classnames'
import { CourseDisplay } from 'components/Dashbar/CourseNavs'
import { Draggable } from 'react-beautiful-dnd'

interface Props {
  index: number
  course: CourseDisplay
}

export default function CourseLine(props: Props) {
  const { index, course } = props

  return (
    <Draggable key={course.name} draggableId={course.name} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          key={index}
          className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
        >
          <span
            className={classnames(
              course.bgColorClass,
              'w-2.5 h-2.5 mr-4 rounded-full',
            )}
          />
          <span>{course.name}</span>
        </div>
      )}
    </Draggable>
  )
}
