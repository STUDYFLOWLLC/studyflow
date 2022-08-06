/* eslint-disable no-await-in-loop */
/* eslint-disable no-case-declarations */

import { ActionType, QuickAction } from 'types/CMDPalette'
import buildFlowActions from './buildFlowActions'
import buildStudentActions from './buildStudentActions'

export default async function buildBackendQuickActions(
  include: ActionType[],
  query: string,
) {
  if (!include) return [] as QuickAction[]

  let quickActions = [] as QuickAction[]

  for (let i = 0; i < include.length; i += 1) {
    const action = include[i]
    switch (action) {
      case ActionType.STUDENT:
        const studentActions = await buildStudentActions(query)
        quickActions = quickActions.concat(studentActions)
        break
      case ActionType.FLOW:
        const flowActions = await buildFlowActions(query)
        quickActions = quickActions.concat(flowActions)
        break
      default:
        break
    }
  }

  return quickActions
}
