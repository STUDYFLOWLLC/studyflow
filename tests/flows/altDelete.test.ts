import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import altDelete from 'utils/flows/altDelete'

const commandHandler = new CommandHandler()
const element = document.createElement('div')

test('rich text with one complex item caret at end', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test-test2$ test0 $ $ axfa',
          },
        },
      ],
      color: Color.GREEN,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  altDelete(blockBody.richText, 26, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 $ $ ',
      },
    },
  ])

  altDelete(blockBody.richText, 22, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 $ ',
      },
    },
  ])

  altDelete(blockBody.richText, 20, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 ',
      },
    },
  ])

  altDelete(blockBody.richText, 18, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ ',
      },
    },
  ])

  altDelete(blockBody.richText, 12, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2',
      },
    },
  ])

  altDelete(blockBody.richText, 10, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-',
      },
    },
  ])

  altDelete(blockBody.richText, 5, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test',
      },
    },
  ])

  altDelete(blockBody.richText, 4, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
  ])
})

test('rich text with one complex item caret in one in from end', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'te-sl',
          },
        },
      ],
      color: Color.GREEN,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  altDelete(blockBody.richText, 4, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'te-l',
      },
    },
  ])

  altDelete(blockBody.richText, 3, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'tel',
      },
    },
  ])

  altDelete(blockBody.richText, 2, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'l',
      },
    },
  ])

  altDelete(blockBody.richText, 0, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'l',
      },
    },
  ])
})

test('extremely complex space case', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'te- sl',
          },
        },
      ],
      color: Color.GREEN,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  altDelete(blockBody.richText, 4, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'tesl',
      },
    },
  ])

  altDelete(blockBody.richText, 3, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'l',
      },
    },
  ])
})

test('rich text with multiple items caret at end', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'te-st',
          },
          annotations: {
            italic: true,
          },
        },
      ],
      color: Color.GREEN,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  altDelete(blockBody.richText, 9, block, commandHandler, element, false)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'te-',
      },
      annotations: {
        italic: true,
      },
    },
  ])

  altDelete(blockBody.richText, 7, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'te',
      },
      annotations: {
        italic: true,
      },
    },
  ])

  altDelete(blockBody.richText, 6, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
  ])
})

test('rich text where multiple rich text items should be deleted', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'te',
          },
          annotations: {
            bold: true,
            italic: true,
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'st',
          },
          annotations: {
            italic: true,
          },
        },
      ],
      color: Color.GREEN,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  altDelete(blockBody.richText, 8, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
  ])
})

test('another rich text where multiple rich text items should be deleted', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'text-current ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test-',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'te',
          },
          annotations: {
            bold: true,
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'st',
          },
          annotations: {
            bold: true,
            italic: true,
          },
        },
      ],
      color: Color.GREEN,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  altDelete(blockBody.richText, 22, block, commandHandler, element, false)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'text-current ',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-',
      },
    },
  ])
})

// test('another more complex rich text where multiple rich text items should be deleted', () => {
//   const block: Block = {
//     id: 'abc123',
//     index: 0,
//     tag: BlockTag.PARAGRAPH,
//     tabs: 0,
//     p: {
//       richText: [
//         {
//           type: RichTextType.TEXT,
//           text: {
//             content: 'text-current ',
//           },
//         },
//         {
//           type: RichTextType.TEXT,
//           text: {
//             content: 'test-',
//           },
//         },
//         {
//           type: RichTextType.TEXT,
//           text: {
//             content: 'te',
//           },
//           annotations: {
//             bold: true,
//           },
//         },
//         {
//           type: RichTextType.TEXT,
//           text: {
//             content: 'st',
//           },
//           annotations: {
//             bold: true,
//             italic: true,
//           },
//         },
//         {
//           type: RichTextType.TEXT,
//           text: {
//             content: 'penis',
//           },
//           annotations: {
//             bold: true,
//             italic: true,
//           },
//         },
//       ],
//       color: Color.GREEN,
//     },
//   }

//   const blockBody = block[block.tag]
//   if (!blockBody?.richText) fail('richText not found')

//   expect(blockBody.richText).toEqual([
//     {
//       type: RichTextType.TEXT,
//       text: {
//         content: 'text-current ',
//       },
//     },
//     {
//       type: RichTextType.TEXT,
//       text: {
//         content: 'test-',
//       },
//     },
//     {
//       type: RichTextType.TEXT,
//       text: {
//         content: 'penis',
//       },
//       annotations: {
//         bold: true,
//         italic: true,
//       },
//     },
//   ])
// })
