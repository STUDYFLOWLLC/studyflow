import {
  Command,
  CommandResult,
  HistoryAction,
} from 'utils/commandPattern/commandModel'
import { Stack } from 'utils/commandPattern/stack'

export interface HistoryStackEntry {
  key: string
  command: Command
}

export class UndoHistory {
  private undoStack: Stack<HistoryStackEntry> = new Stack()
  private redoStack: Stack<HistoryStackEntry> = new Stack()

  public add(
    entry: HistoryStackEntry,
    result: CommandResult,
    action: HistoryAction,
  ): void {
    if (result.canUndo) this.undoStack.push(entry)

    let canRedo: boolean = false
    switch (action) {
      case HistoryAction.EXECUTE:
        this.redoStack.clear()
        canRedo = !!result.canRedo
        break
      case HistoryAction.REDO:
        canRedo = !!result.canRedo && !this.redoStack.peek()
        break
    }

    if (canRedo) this.pushRedo(entry)
  }

  private pushRedo(entry: HistoryStackEntry): void {
    const nextRedoEntry = this.redoStack.peek()
    if (nextRedoEntry === null || nextRedoEntry !== entry)
      this.redoStack.push(entry)
  }

  public getUndoEntries(): HistoryStackEntry[] {
    return this.undoStack.getAll()
  }

  public getRedoEntries(): HistoryStackEntry[] {
    return this.redoStack.getAll()
  }

  public clear(): void {
    this.undoStack.clear()
    this.redoStack.clear()
  }

  public popUndo(): HistoryStackEntry | undefined {
    const entry = this.undoStack.pop()
    if (entry) this.pushRedo(entry)
    return entry
  }

  public popRedo(): HistoryStackEntry | undefined {
    return this.redoStack.pop()
  }

  public peekRedo(): HistoryStackEntry | undefined {
    return this.redoStack.peek()
  }
}
