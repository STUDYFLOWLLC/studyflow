import { Block, Color } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { UpdatePropertyWithCaretCommand } from 'utils/commandPattern/common/commands/updatePropertyWithCaret'

export default function changeBlockColor(
  commandHandler: CommandHandler,
  element: HTMLElement | null,
  caretIndex: number,
  setCaretIndex: (caretIndex: number) => void,
  block: Block,
  color: Color,
) {
  if (!element) return
  const target = block[block.tag]
  if (target) {
    commandHandler.execute(
      'update-property-with-caret',
      new UpdatePropertyWithCaretCommand({
        target,
        propertyName: 'color',
        newValue: color,
        element,
        caretIndex,
        setCaretIndex,
      }),
    )
  }
}
