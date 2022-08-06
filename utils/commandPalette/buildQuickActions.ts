import { ActionType, QuickAction } from 'types/CMDPalette'
import buildBackendQuickActions from './buildBackendQuickActions'
import buildLocalQuickActions from './buildLocalQuickActions'

export default async function buildQuickActions(
  include: ActionType[],
  query: string,
) {
  if (!include) return [] as QuickAction[]

  let quickActions = [] as QuickAction[]

  quickActions = quickActions.concat(buildLocalQuickActions(include))
  const backendQuickActions = await buildBackendQuickActions(include, query)
  quickActions = quickActions.concat(backendQuickActions)

  return quickActions
}
