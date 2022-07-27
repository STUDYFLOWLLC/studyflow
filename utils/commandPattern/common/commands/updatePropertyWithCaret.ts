/* eslint-disable @typescript-eslint/no-explicit-any */
import { Command, CommandResult } from 'utils/commandPattern/commandModel'
import { getCaretIndex, setCaretToPosition } from 'utils/flows/caretHelpers'

export interface UpdatePropertyWithCaretCommandData<TTarget> {
  target: TTarget
  propertyName: keyof TTarget
  element: HTMLElement
  newValue?: any
  caretIndex: number
}

export class UpdatePropertyWithCaretCommand<TTarget> implements Command {
  private previousValue?: any

  private previousCaretIndex?: number

  public displayName: string

  constructor(
    private commandData: UpdatePropertyWithCaretCommandData<TTarget>,
  ) {
    this.previousCaretIndex = commandData.caretIndex
    this.displayName = `Update ${String(commandData.propertyName)} with cursor`
  }

  public execute(): CommandResult {
    this.previousValue = this.updatePropertyWithCursor(
      this.commandData.newValue,
    )
    return { success: true, canUndo: true }
  }

  public undo(): CommandResult {
    const { element } = this.commandData

    this.previousValue = this.updatePropertyWithCursor(this.previousValue)

    const tempIndex = getCaretIndex(element)

    if (this.previousCaretIndex !== undefined) {
      setCaretToPosition(element, this.previousCaretIndex)
    }

    this.previousCaretIndex = tempIndex

    return { success: true, canRedo: true }
  }

  public redo(): CommandResult {
    const { element } = this.commandData

    this.previousValue = this.updatePropertyWithCursor(this.previousValue)

    const tempIndex = getCaretIndex(element)

    if (this.previousCaretIndex !== undefined) {
      setCaretToPosition(element, this.previousCaretIndex)
    }

    this.previousCaretIndex = tempIndex

    return { success: true, canUndo: true }
  }

  private updatePropertyWithCursor(newValue?: any): any {
    const { target, propertyName } = this.commandData

    const currentValue = target[propertyName]
    target[propertyName] = newValue

    return currentValue
  }
}
