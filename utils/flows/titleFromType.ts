import { FlowType } from 'types/Flow'

export default function titleFromType(type: FlowType): string {
  switch (type) {
    case FlowType.LECTURE:
      return 'L## - Lecture Title'
    case FlowType.DISCUSSION:
      return 'D## - Discussion Title'
    case FlowType.NOTE:
      return 'Textbook Readings #.# - #.#'
    case FlowType.ASSIGNMENT:
      return 'A# - Assignment Title'
    case FlowType.ASSESSMENT:
      return 'Prelim #'
    case FlowType.SYNTHESIS:
      return 'Prelim # Synthesis'
    default:
      return 'Untitled'
  }
}
