import { FlowType } from 'types/Flow'

export default function titleFromType(type: FlowType): string {
  switch (type) {
    case FlowType.LECTURE:
      return 'L## - Lecture Title'
    case FlowType.DISCUSSION:
      return 'D## - Discussion Title'
    case FlowType.NOTE:
      return 'N## - Note Title'
    case FlowType.ASSIGNMENT:
      return 'Assignment Title'
    case FlowType.ASSESSMENT:
      return 'Assessment Title'
    case FlowType.SYNTHESIS:
      return 'Synthesis #'
    default:
      return 'Untitled'
  }
}
