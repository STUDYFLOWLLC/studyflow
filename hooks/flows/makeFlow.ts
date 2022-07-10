import request, { gql } from 'graphql-request'
import { Color } from 'types/Colors'
import {
  Block,
  BlockTag,
  FlowType,
  FlowVisibility,
  RichTextType,
} from 'types/Flow'

export default async function makeFlow(
  flowId: string,
  type: FlowType,
  courseOnTermId: number,
  visibility?: FlowVisibility,
  title?: string,
  body?: string,
) {
  const mutation = gql`
    mutation Mutation($data: FlowCreateInput!) {
      createFlow(data: $data) {
        FlowID
      }
    }
  `

  const defaultBody: Block[] = [
    {
      id: flowId,
      index: 0,
      tag: BlockTag.PARAGRAPH,
      tabs: 0,
      p: {
        richText: [
          {
            type: RichTextType.TEXT,
            text: {
              content: '',
            },
          },
        ],
        color: Color.DEFAULT,
      },
    },
  ]

  const variables = {
    data: {
      FlowID: flowId,
      Type: type,
      Title: title || 'Untitled',
      Body: body || JSON.stringify(defaultBody),
      Visibility: visibility || FlowVisibility.PRIVATE,
      FK_CourseOnTerm: {
        connect: {
          CourseOnTermID: courseOnTermId,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
