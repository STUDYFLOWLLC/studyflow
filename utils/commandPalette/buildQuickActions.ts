import { ActionType, jumpTo, QuickAction, schools } from 'types/CMDPalette'

/**
 * Build the initial array of quick actions for the command palette based on the
 * include parameter.
 * @param include if true, include the action in the list of quick actions
 * @returns an array of desired quick actions
 */
export default function buildQuickActions(include?: ActionType[]) {
  if (!include) return [] as QuickAction[]

  let quickActions = [] as QuickAction[]

  for (let i = 0; i < include.length; i += 1) {
    const action = include[i]
    switch (action) {
      case ActionType.JUMPTO:
        quickActions = quickActions.concat(jumpTo)
        break
      case ActionType.SCHOOL:
        quickActions = quickActions.concat(schools)
        break
      default:
        break
    }
  }

  return quickActions
}
