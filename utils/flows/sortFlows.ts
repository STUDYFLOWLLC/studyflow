import { DashFlow } from 'hooks/flows/useDashFlows'

/**
 * Sort flows by first their (user-entered) date, then by the time they were created
 * (if necessary).
 * @param flowA the first flow to compare
 * @param flowB the second flow to compare
 * @returns 1 if flowA is more recent than flowB, -1 if flowB is more recent than flowA
 * (its not possible for them to be equal, as two flows cannot be created at the same
 * exact time) these are reversed to make the sort ascending.
 */
export default function sortFlows(
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
