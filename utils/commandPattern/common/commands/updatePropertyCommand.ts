/* eslint-disable @typescript-eslint/no-explicit-any */
import { Command, CommandResult } from 'utils/commandPattern/commandModel'

export interface UpdatePropertyCommandData<TTarget> {
  target: TTarget
  propertyName: keyof TTarget
  newValue?: any
}

export class UpdatePropertyCommand<TTarget> implements Command {
  private previousValue?: any

  public displayName: string

  constructor(private commandData: UpdatePropertyCommandData<TTarget>) {
    this.displayName = `Update ${String(commandData.propertyName)}`
  }

  public execute(): CommandResult {
    this.previousValue = this.updateProperty(this.commandData.newValue)
    return { success: true, canUndo: true }
  }

  public undo(): CommandResult {
    this.updateProperty(this.previousValue)
    this.previousValue = undefined
    return { success: true, canRedo: true }
  }

  public redo(): CommandResult {
    return this.execute()
  }

  private updateProperty(newValue?: any): any {
    const { target, propertyName } = this.commandData

    const currentValue = target[propertyName]
    target[propertyName] = newValue
    return currentValue
  }
}
