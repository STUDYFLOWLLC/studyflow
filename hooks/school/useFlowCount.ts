import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useFlowCount(SchoolID: number) {
  const query = gql`
    query Query($where: FlowWhereInput) {
      aggregateFlow(where: $where) {
        _count {
          FlowID
        }
      }
    }
  `

  const variables = {
    where: {
      FK_CourseOnTerm: {
        is: {
          FK_Term: {
            is: {
              FK_SchoolID: {
                equals: SchoolID,
              },
            },
          },
        },
      },
    },
  }

  const { data, error } = useSWR([query, variables])

  if (data) {
    return {
      flowCount: data.aggregateFlow._count.FlowID,
      flowCountLoading: false,
      flowCountError: error,
    }
  }

  return {
    flowCount: 0,
    flowCountLoading: !error && !data,
    flowCountError: error,
  }
}
