import classNames from 'classnames'
import { IconType } from 'react-icons/lib'
import { useSlate } from 'slate-react'
import { Format } from 'types/CustomSlate'
import customEditor from 'utils/slate/customEditor'

const TEXT_ALIGN_TYPES = ['left', 'center', 'right']

interface Props {
  format: Format
  ButtonIcon?: IconType
  text?: string
}

export default function BlockButton({ format, ButtonIcon, text }: Props) {
  const editor = useSlate()
  return (
    <button
      type="button"
      className={classNames(
        {
          'text-primary': customEditor.isBlockActive(
            editor,
            format,
            TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
          ),
        },
        'flex justify-center items-center',
      )}
      onMouseDown={(event) => {
        event.preventDefault()
        customEditor.toggleBlock(editor, format)
      }}
    >
      {text && <span className="font-bold">{text}</span>}
      {ButtonIcon && <ButtonIcon className="w-6 h-6" />}
    </button>
  )
}
