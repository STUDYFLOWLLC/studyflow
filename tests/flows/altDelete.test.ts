import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import altDelete from 'utils/flows/altDelete'

test('rich text with one complex item cursor at end', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
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

  blockBody.richText = altDelete(block, 26)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 $ $ ',
      },
    },
  ])

  blockBody.richText = altDelete(block, 22)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 $ ',
      },
    },
  ])

  blockBody.richText = altDelete(block, 20)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ test0 ',
      },
    },
  ])

  blockBody.richText = altDelete(block, 18)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2$ ',
      },
    },
  ])

  blockBody.richText = altDelete(block, 12)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-test2',
      },
    },
  ])

  blockBody.richText = altDelete(block, 10)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-',
      },
    },
  ])

  blockBody.richText = altDelete(block, 5)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test',
      },
    },
  ])

  blockBody.richText = altDelete(block, 4)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
  ])
})

test('rich text with one complex item cursor in one in from end', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
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

  blockBody.richText = altDelete(block, 4)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'te-l',
      },
    },
  ])

  blockBody.richText = altDelete(block, 3)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'tel',
      },
    },
  ])

  blockBody.richText = altDelete(block, 2)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'l',
      },
    },
  ])

  blockBody.richText = altDelete(block, 0)
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

  blockBody.richText = altDelete(block, 4)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'tesl',
      },
    },
  ])

  blockBody.richText = altDelete(block, 3)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'l',
      },
    },
  ])
})

test('rich text with multiple items cursor at end', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
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

  blockBody.richText = altDelete(block, 9)
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

  blockBody.richText = altDelete(block, 7)
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

  blockBody.richText = altDelete(block, 6)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test',
      },
    },
  ])

  blockBody.richText = altDelete(block, 4)
  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
  ])
})
