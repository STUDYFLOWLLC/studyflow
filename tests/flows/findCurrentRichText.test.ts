import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import findCurrentRichText from 'utils/flows/findCurrentRichText'

test('finding the first block when there is only one (index beginning)', () => {
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
            content: 'Hello',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 0)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'Hello',
    },
  })
})

test('finding the first block when there is only one (index middle)', () => {
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
            content: 'Hello',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 3)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'Hello',
    },
  })
})

test('finding the first block when there is only one (index end)', () => {
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
            content: 'Hello',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 5)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'Hello',
    },
  })
})

test('finding the second block when there are only two (index beginning)', () => {
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
            content: 'Hello',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 6)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'world',
    },
  })
})

test('finding the second block when there are only two (index end)', () => {
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
            content: 'Hello',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 10)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'world',
    },
  })
})

test('finding the the middle block when there are three (index beginning)', () => {
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
            content: 'Hello',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'beautiful',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 6)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'beautiful',
    },
  })
})

test('finding the the middle block when there are three (index middle)', () => {
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
            content: 'Hello',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'beautiful',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 10)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'beautiful',
    },
  })
})

test('finding the the middle block when there are three (index end)', () => {
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
            content: 'Hello',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'beautiful',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 14)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: 'beautiful',
    },
  })
})

test('find the empty beginning block', () => {
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
            content: 'beautiful',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'world',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 0)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
  })
})

test('find the empty middle block', () => {
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
            content: 'Hello ',
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
            content: 'world',
          },
        },
      ],
      color: Color.DEFAULT,
    },
  }

  const blockBody = block[block.tag]
  if (!blockBody?.richText) fail('richText not found')

  const currentRichText = findCurrentRichText(blockBody.richText, 6)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
  })
})

test('find the empty end block', () => {
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
            content: 'Hello ',
          },
        },
        {
          type: RichTextType.TEXT,
          text: {
            content: 'beautiful',
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

  const currentRichText = findCurrentRichText(blockBody.richText, 15)
  expect(currentRichText).toEqual({
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
  })
})
