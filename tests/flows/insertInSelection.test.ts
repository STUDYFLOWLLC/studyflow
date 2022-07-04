import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import insertInSelection from 'utils/flows/insertInSelection'

test('one item of rich text array full deletion', () => {
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

  blockBody.richText = insertInSelection(block, 0, 26, 'a')

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'a',
      },
    },
  ])
})

test('one item of rich text array delete middle part', () => {
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

  blockBody.richText = insertInSelection(block, 5, 21, '4')

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test-4 axfa',
      },
    },
  ])
})

test('multiple items of rich text no full deletion', () => {
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
            content: 'test ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test2 ',
          },
          annotations: {
            color: Color.GREEN,
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test3',
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

  blockBody.richText = insertInSelection(block, 2, 9, 'peepee')

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'tepeepee',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: '2 ',
      },
      annotations: {
        color: Color.GREEN,
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'test3',
      },
      annotations: {
        italic: true,
      },
    },
  ])
})

test('multiple items of rich text all deletion and preserve first', () => {
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
            content: 'test ',
          },
          annotations: {
            bold: true,
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test2 ',
          },
          annotations: {
            color: Color.GREEN,
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'test3',
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

  blockBody.richText = insertInSelection(block, 0, 16, '')

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
      annotations: {
        bold: true,
      },
    },
  ])
})
