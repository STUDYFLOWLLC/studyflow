import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useAutomationTimer() {
  const query = gql`
    query AutomationLogs(
      $orderBy: [AutomationLogOrderByWithRelationInput!]
      $take: Int
      $where: AutomationLogWhereInput
    ) {
      automationLogs(orderBy: $orderBy, take: $take, where: $where) {
        Time
      }
    }
  `

  const variables = {
    orderBy: [
      {
        AutomationLogID: 'desc',
      },
    ],
    take: 1,
    where: {
      Message: {
        equals: '{/MainAutomation/}',
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  console.log(data)

  if (data?.automationLogs) {
    console.log(
      Date.now() +
        1000 * 60 * 15 -
        (Date.now() - new Date(data.automationLogs[0].Time).getTime()),
    )
    return {
      automationTimer:
        Date.now() +
        1000 * 60 * 15 -
        (Date.now() - new Date(data.automationLogs[0].Time).getTime()),
      automationTimerLoading: false,
      automationTimerError: null,
      mutateAutomationTimer: mutate,
    }
  }

  return {
    automationTimer: Date.now() + 1000 * 60 * 15,
    automationTimerLoading: true,
    automationTimerError: error,
    mutateAutomationTimer: mutate,
  }
}
