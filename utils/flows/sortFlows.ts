import { DashFlow } from 'hooks/flows/useDashFlows'

export enum FlowSortOptions {
  RECENTLY_VIEWED_DESCENDING = 'Recently Viewed ↓',
  RECENTLY_VIEWED_ASCENDING = 'Recently Viewed ↑',
  BY_DATE_DESCENDING = 'By Date ↓',
  BY_DATE_ASCENDING = 'By Date ↑',
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

export function masterFlowSorterAndGrouper(
  flows: DashFlow[],
  sortBy: FlowSortOptions,
  groupBy: number | 'All' | 'Trash',
) {
  let sortedAndGroupedFlows: DashFlow[]

  switch (groupBy) {
    case 'All':
      sortedAndGroupedFlows = flows
      break
    case 'Trash':
      sortedAndGroupedFlows = flows.filter((flow) => flow.Trashed)
      break
    default:
      sortedAndGroupedFlows = flows.filter(
        (flow) => flow.FK_CourseOnTerm.CourseOnTermID === groupBy,
      )
      break
  }

  switch (sortBy) {
    case FlowSortOptions.RECENTLY_VIEWED_DESCENDING:
      sortedAndGroupedFlows.sort((flowA, flowB) =>
        sortByLastOpened(flowA, flowB, false),
      )
      break
    case FlowSortOptions.RECENTLY_VIEWED_ASCENDING:
      sortedAndGroupedFlows.sort((flowA, flowB) =>
        sortByLastOpened(flowA, flowB, true),
      )
      break
    case FlowSortOptions.BY_DATE_DESCENDING:
      sortedAndGroupedFlows.sort((flowA, flowB) =>
        sortByUserEnteredDate(flowA, flowB, false),
      )
      break
    case FlowSortOptions.BY_DATE_ASCENDING:
      sortedAndGroupedFlows.sort((flowA, flowB) =>
        sortByUserEnteredDate(flowA, flowB, true),
      )
      break
    default:
      break
  }

  return sortedAndGroupedFlows
}
