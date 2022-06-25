/* MAIN MODEL */
export interface CommandResult {
  success: boolean
  canUndo?: boolean
  canRedo?: boolean
}

export interface Command {
  execute(): CommandResult // the command
  undo(): CommandResult // inverse of execute
  redo(): CommandResult // re-executes execute
  displayName?: string
}

export enum HistoryAction {
  EXECUTE,
  UNDO,
  REDO,
}
