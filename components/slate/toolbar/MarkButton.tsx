import classNames from 'classnames'
import { IconType } from 'react-icons/lib'
import { useSlate } from 'slate-react'
import { Format } from 'types/CustomSlate'
import customEditor from 'utils/slate/customEditor'

interface Props {
  format: Format
  ButtonIcon: IconType
}

export default function MarkButton({ format, ButtonIcon }: Props) {
  const editor = useSlate()
  return (
    <button
      type="button"
      className={classNames(
        {
          'text-primary': customEditor.isMarkActive(editor, format),
        },
        'flex justify-center items-center',
      )}
      onMouseDown={(event) => {
        event.preventDefault()
        customEditor.toggleMark(editor, format)
      }}
    >
      <ButtonIcon className="w-6 h-6" />
    </button>
  )
}
