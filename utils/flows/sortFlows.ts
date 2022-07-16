import { DashFlow } from 'hooks/flows/useDashFlows'

export enum ViewTypes {
  RECENTLY_VIEWED = 'Recently Viewed',
  TRASH = 'Trash',
}

export enum FlowSortOptions {
  USER_ENTERED_DATE = 'User Entered Date',
  LAST_OPENED = 'Last Opened',
}

/**
 * Sort flows by first their (user-entered) date, then by the time they were created
 * (if necessary).
 * @param flowA the first flow to compare
 * @param flowB the second flow to compare
 * @returns 1 if flowA is more recent than flowB, -1 if flowB is more recent than flowA
 * (its not possible for them to be equal, as two flows cannot be created at the same
 * exact time) these are reversed to make the sort ascending.
 */
export function sortByUserEnteredDate(
  flowA: DashFlow,
  flowB: DashFlow,
  asc?: boolean,
) {
  if (flowA.UserEnteredDate.slice(0, 10) < flowB.UserEnteredDate.slice(0, 10))
    return asc ? -1 : 1
  if (flowA.UserEnteredDate.slice(0, 10) > flowB.UserEnteredDate.slice(0, 10))
    return asc ? 1 : -1
  if (flowA.CreatedTime < flowB.CreatedTime) return asc ? -1 : 1
  if (flowA.CreatedTime > flowB.CreatedTime) return asc ? 1 : -1
  return 0
}

/**
 * Sort flows by first their (last-opened) date, then sort by user entered date
 * (if necessary).
 * @param flowA the first flow to compare
 * @param flowB the second flow to compare
 * @returns 1 if flowA is more recent than flowB, -1 if flowB is more recent than flowA
 * (its not possible for them to be equal, as two flows cannot be created at the same
 * exact time) these are reversed to make the sort ascending.
 */
export function sortByLastOpened(
  flowA: DashFlow,
  flowB: DashFlow,
  asc?: boolean,
) {
  if (flowA.LastOpened < flowB.LastOpened) return asc ? -1 : 1
  if (flowA.LastOpened > flowB.LastOpened) return asc ? 1 : -1
  return sortByUserEnteredDate(flowA, flowB, asc)
}

export function masterFlowFilterAndSorter(
  flows: DashFlow[],
  sortBy: FlowSortOptions,
  filterBy: ViewTypes,
  asc?: boolean,
) {
  let filteredAndSortedFlows: DashFlow[]

  switch (filterBy) {
    case ViewTypes.RECENTLY_VIEWED:
      filteredAndSortedFlows = flows.filter((flow) => flow.Trashed === false)
      break
    case ViewTypes.TRASH:
      filteredAndSortedFlows = flows.filter((flow) => flow.Trashed === true)
      break
    default:
      filteredAndSortedFlows = flows
      break
  }

  switch (sortBy) {
    case FlowSortOptions.USER_ENTERED_DATE:
      filteredAndSortedFlows.sort((flowA, flowB) =>
        sortByUserEnteredDate(flowA, flowB, asc),
      )
      break
    case FlowSortOptions.LAST_OPENED:
      filteredAndSortedFlows.sort((flowA, flowB) =>
        sortByLastOpened(flowA, flowB, asc),
      )
      break
    default:
      return flows
  }

  return filteredAndSortedFlows
}
