import { Block, Color } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { UpdatePropertyCommand } from 'utils/commandPattern/common/commands/updatePropertyCommand'

export default function changeBlockColor(
  commandHandler: CommandHandler,
  block: Block,
  color: Color,
) {
  const target = block[block.tag]
  if (target) {
    commandHandler.execute(
      'update-property',
      new UpdatePropertyCommand({
        target,
        propertyName: 'color',
        newValue: color,
      }),
    )
  }
}
