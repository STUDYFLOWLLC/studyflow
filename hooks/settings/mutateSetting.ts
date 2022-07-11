import request, { gql } from 'graphql-request'

export default function mutateLastSeenWelcomeMessage(settingId: number) {
  const mutation = gql`
    mutation UpdateSetting(
      $data: SettingUpdateInput!
      $where: SettingWhereUniqueInput!
    ) {
      updateSetting(data: $data, where: $where) {
        SettingID
      }
    }
  `

  const variables = {
    data: {
      LastSeenWelcomeMessageAt: {
        set: new Date(),
      },
    },
    where: {
      SettingID: settingId,
    },
  }

  return request('/api/graphql', mutation, variables)
}
