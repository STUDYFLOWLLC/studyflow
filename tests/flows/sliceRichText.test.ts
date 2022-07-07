import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import sliceRichText from 'utils/flows/sliceRichText'

test('a basic slice of one block', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'Hello, ',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 2)
  expect(sliceIndex).toEqual(1)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'He',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'llo, ',
      },
    },
  ])
})

test('a slice in the middle with no splitting', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'Hello, ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world!',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 7)
  expect(sliceIndex).toEqual(1)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'Hello, ',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'world!',
      },
    },
  ])
})

test('a slice in the middle with splitting', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'Hello, ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world!',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 6)
  expect(sliceIndex).toEqual(1)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'Hello,',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: ' ',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'world!',
      },
    },
  ])
})

test('slicing at the beginning', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'Hello, ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world!',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 0)
  expect(sliceIndex).toEqual(0)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'Hello, ',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'world!',
      },
    },
  ])
})

test('slicing at the end', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'Hello, ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world!',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 13)
  expect(sliceIndex).toEqual(2)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'Hello, ',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'world!',
      },
    },
  ])
})

test('slicing on an empty block in beginning', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: '',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world!',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 0)
  expect(sliceIndex).toEqual(0)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'world!',
      },
    },
  ])
})

test('slicing on an empty block in middle', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'Hello, ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: '',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world!',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 7)
  expect(sliceIndex).toEqual(1)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'Hello, ',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: 'world!',
      },
    },
  ])
})

test('slicing on an empty block in end', () => {
  const block: Block = {
    id: 'abc123',
    tag: BlockTag.PARAGRAPH,
    tabs: 0,
    index: 0,
    p: {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: 'Hello, ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: '',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const sliceIndex = sliceRichText(blockBody.richText, 7)
  expect(sliceIndex).toEqual(1)

  expect(blockBody.richText).toEqual([
    {
      type: RichTextType.TEXT,
      text: {
        content: 'Hello, ',
      },
    },
    {
      type: RichTextType.TEXT,
      text: {
        content: '',
      },
    },
  ])
})
