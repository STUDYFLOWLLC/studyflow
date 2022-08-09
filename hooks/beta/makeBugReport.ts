import { MyValue } from 'dinnerplate/types/plateTypes'
import request, { gql } from 'graphql-request'

export default async function makeBugReport(value: MyValue, username?: string) {
  const mutation = gql`
    mutation Mutation($data: BugReportCreateInput!) {
      createBugReport(data: $data) {
        BugReportID
        CreatedTime
        FixedTime
        Title
        Body
        FK_User {
          UserID
          ProfilePictureLink
          Name
          Username
          FK_School {
            Name
            HasClassSupport
          }
          Bio
          About
        }
      }
    }
  `

  const title = value[0]?.children[0]?.text

  const variables: any = {
    data: {
      Title: title || 'Untitled',
      Body: JSON.stringify(value),
    },
  }

  if (username) {
    variables.data.FK_User = {
      connect: {
        Username: username,
      },
    }
  }

  const data = await request('/api/graphql', mutation, variables)
  return data.createBugReport
}
