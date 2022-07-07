import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import altDelete from 'utils/flows/altDelete'

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

  blockBody.richText = altDelete(blockBody.richText, 26)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 $ $ ',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 22)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 $ ',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 20)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 ',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 18)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ ',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 12)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 10)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 5)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 4)
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

  blockBody.richText = altDelete(blockBody.richText, 4)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'te-l',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 3)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'tel',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 2)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'l',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 0)
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

  blockBody.richText = altDelete(blockBody.richText, 4)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'tesl',
      },
    },
  ])

  blockBody.richText = altDelete(blockBody.richText, 3)
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

  blockBody.richText = altDelete(blockBody.richText, 9)
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

  blockBody.richText = altDelete(blockBody.richText, 7)
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

  blockBody.richText = altDelete(blockBody.richText, 6)
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

  blockBody.richText = altDelete(blockBody.richText, 8)
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

  blockBody.richText = altDelete(blockBody.richText, 22)
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

test('another more complex rich text where multiple rich text items should be deleted', () => {
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
        {
          type: RichTextType.TEXT,
          text: {
            content: 'penis',
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

  blockBody.richText = altDelete(blockBody.richText, 22)
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
    {
      type: RichTextType.TEXT,
      text: {
        content: 'penis',
      },
      annotations: {
        bold: true,
        italic: true,
      },
    },
  ])
})
