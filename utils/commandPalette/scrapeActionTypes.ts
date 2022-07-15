import { QuickAction } from 'types/CMDPalette'

/**
 * Given an array of quickactions, return all the actiontypes of those quickactions
 * @param actions an array of actions included in the command palette
 * @returns array of actiontypes in the given quickactions
 */
export default function scrapeActionTypes(actions: QuickAction[]) {
  const actionTypes = actions.map((action) => action.actionType)
  return actionTypes
}
