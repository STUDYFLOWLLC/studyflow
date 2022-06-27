/* eslint-disable no-throw-literal */
/* eslint-disable import/prefer-default-export */

import { Command } from 'utils/commandPattern/commandModel'
import {
  commonCommandKeys,
  CommonCommandMap,
  isCommonCommand,
} from 'utils/commandPattern/common/commandMap'

// Specific commands
import { UpdatePropertyCommand } from 'utils/commandPattern/common/commands/updatePropertyCommand'
import { UpdatePropertyWithCaretCommand } from 'utils/commandPattern/common/commands/updatePropertyWithCaret'

export class CommonCommandFactory<TTarget> {
  public create<K extends commonCommandKeys<TTarget>>(
    key: K,
    commandData: CommonCommandMap<TTarget>[K],
  ): Command {
    if (isCommonCommand(commandData, key, 'update-property')) {
      return new UpdatePropertyCommand<TTarget>(commandData)
    }
    if (isCommonCommand(commandData, key, 'update-property-with-caret')) {
      return new UpdatePropertyWithCaretCommand<TTarget>(commandData)
    }
    throw `Unable to create common command. Unknown command key '${key}'.`
  }
}
