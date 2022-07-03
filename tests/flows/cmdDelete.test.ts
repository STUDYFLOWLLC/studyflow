import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import cmdDelete from 'utils/flows/cmdDelete'

test('one item of rich text array caret at end', () => {
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

  blockBody.richText = cmdDelete(block, 26)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
  ])
})

test('one item of rich text array caret in middle', () => {
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

  blockBody.richText = cmdDelete(block, 13)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'est0 $ $ axfa',
      },
    },
  ])
})

test('multiple items of rich text array caret at end', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
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

  blockBody.richText = cmdDelete(block, 16)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
      annotations: {
        italic: true,
      },
    },
  ])
})

test('multiple items of rich text array caret in middle', () => {
  const block: Block = {
    id: 'abc123',
    index: 0,
    tag: BlockTag.PARAGRAPH,
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

  blockBody.richText = cmdDelete(block, 7)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'st2 ',
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
