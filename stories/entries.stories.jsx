import CourseLine from 'components/Dashbar/CourseLine'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default {
  title: 'One Liners',
  component: CourseLine,
}

const CourseLineTemplate = (args) => (
  <DragDropContext>
    <Droppable>
      {(provided, snapshot) => (
        <div
          className="mt-1 space-y-1"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <CourseLine {...args} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
)
export const CourseLine1 = CourseLineTemplate.bind({})
CourseLine1.args = {
  index: 0,
  course: {
    name: 'CS1110',
    href: '#',
    bgColorClass: 'bg-red-300',
  },
}
