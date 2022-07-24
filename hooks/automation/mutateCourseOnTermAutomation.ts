/* eslint-disable import/prefer-default-export */

import request, { gql } from 'graphql-request'
import { FlowType, FlowVisibility } from 'types/Flow'

export async function mutateCourseOnTermAutomationDefaultType(
  courseOnTermAutomationId: number,
  newDefaultType: FlowType,
) {
  const mutation = gql`
    mutation UpdateCourseOnTermAutomation(
      $data: CourseOnTermAutomationUpdateInput!
      $where: CourseOnTermAutomationWhereUniqueInput!
    ) {
      updateCourseOnTermAutomation(data: $data, where: $where) {
        CourseOnTermAutomationID
      }
    }
  `

  const variables = {
    data: {
      DefaultType: {
        set: newDefaultType,
      },
    },
    where: {
      CourseOnTermAutomationID: courseOnTermAutomationId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateCourseOnTermDefaultVisibility(
  courseOnTermAutomationId: number,
  newDefaultVisibility: FlowVisibility,
) {
  const mutation = gql`
    mutation UpdateCourseOnTermAutomation(
      $data: CourseOnTermAutomationUpdateInput!
      $where: CourseOnTermAutomationWhereUniqueInput!
    ) {
      updateCourseOnTermAutomation(data: $data, where: $where) {
        CourseOnTermAutomationID
      }
    }
  `

  const variables = {
    data: {
      DefaultVisibility: {
        set: newDefaultVisibility,
      },
    },
    where: {
      CourseOnTermAutomationID: courseOnTermAutomationId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
