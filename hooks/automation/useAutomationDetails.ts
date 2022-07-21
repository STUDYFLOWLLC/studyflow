import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useAutomationDetails(userId: number | undefined) {
  const query = gql`
    query ExampleQuery($where: AutomationWhereUniqueInput!) {
      automation(where: $where) {
        AutomationID
        RefreshToken
        FK_UserID
      }
    }
  `

  const variables = {
    where: {
      FK_UserID: userId,
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.automation) {
    return {
      automationDetails: data.automation,
      automationDetailsLoading: false,
      automationDetailsError: null,
      mutateAutomationDetails: mutate,
    }
  }

  return {
    automationDetails: data,
    automationDetailsLoading: !error && !data,
    automationDetailsError: error,
    mutateAutomationDetails: mutate,
  }
}
