import { Command } from 'utils/commandPattern/commandModel'
import {
  commonCommandKeys,
  CommonCommandMap,
  isCommonCommand,
} from 'utils/commandPattern/common/commandMap'

// Specific commands
import { UpdatePropertyCommand } from 'utils/commandPattern/common/commands/updatePropertyCommand'

export class CommonCommandFactory<TTarget> {
  public create<K extends commonCommandKeys<TTarget>>(
    key: K,
    commandData: CommonCommandMap<TTarget>[K],
  ): Command {
    if (isCommonCommand(commandData, key, 'update-property')) {
      return new UpdatePropertyCommand<TTarget>(commandData)
    } else
      throw `Unable to create common command. Unknown command key '${key}'.`
  }
}
