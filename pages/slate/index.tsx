/* eslint-disable react/no-array-index-key */
// Import React dependencies.
// Import the Slate components and React plugin.
import { TEditableProps } from '@udecode/plate'
import MainPlate from 'dinnerplate/MainPlate'

const editableProps: TEditableProps = {
  placeholder: 'Type...',
}

export default function index() {
  return (
    <div>
      <MainPlate />
    </div>
  )
}
