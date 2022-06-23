/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

import FlowBlock from 'components/Flow/FlowBlock'
import { useState } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'
import { Block, BlockTag, Color, RichTextType } from 'types/Flow'
import { setCaretToEnd } from 'utils/caretHelpers'
import richTextEditor from 'utils/richTextEditor'
import useStateCallback from 'utils/useStateCallback'
import { v4 as uuidv4 } from 'uuid'

export interface addDeleteParams {
  ref: HTMLElement | null
}

const initialBlock: Block = {
  id: uuidv4(),
  index: 0,
  tag: BlockTag.PARAGRAPH,
  p: {
    richText: [
      {
        type: RichTextType.TEXT,
        text: {
          content: 'TESTING',
        },
      },
    ],
    color: Color.GREEN,
  },
}

const secondBlock: Block = {
  id: uuidv4(),
  index: 1,
  tag: BlockTag.PARAGRAPH,
  p: {
    richText: [
      {
        type: RichTextType.TEXT,
        text: {
          content: 'TESTING2',
        },
      },
    ],
    color: Color.RED,
  },
}

export default function FlowPage() {
  const [blocks, setBlocks] = useStateCallback([initialBlock, secondBlock])
  const [currentBlock, setCurrentBlock] = useState<Block>(initialBlock)
  const [currentCaretIndex, setCurrentCaretIndex] = useState(0)

  const updatePageHandler = (updatedBlock: Block) => {
    const index = blocks.map((b: Block) => b.id).indexOf(updatedBlock.id)
    const updatedBlocks = [...blocks]
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      p: updatedBlock.p,
    }
    // this.setState({ blocks: updatedBlocks })
  }

  const changeBlockColor = (block: Block, color: Color) => {
    const blockText = block[currentBlock.tag]
    if (blockText) blockText.color = color
  }

  const restoreBlockAndChangeColor = (newBlock: Block, color: Color) => {
    const tempBlocks = [...blocks]
    tempBlocks[newBlock.index] = newBlock
    setBlocks(tempBlocks)
    changeBlockColor(newBlock, color)
    setCurrentBlock(newBlock)
    return newBlock
  }

  const editCurrentBlock = (e: ContentEditableEvent) => {
    const currentRichText = currentBlock[currentBlock.tag]?.richText[0]
    richTextEditor(currentRichText, e.target.value)
  }

  const blockCleanupAfterCommand = (block: any) => {
    const blockRichTexts = block[block.tag]?.richText

    if (!blockRichTexts) return
    const { length } = blockRichTexts
    const lastRichText = blockRichTexts[length - 1]

    if (!lastRichText?.text?.content) return
    const lastSlashIndex =
      blockRichTexts[blockRichTexts.length - 1].text.content.lastIndexOf('/')

    if (lastSlashIndex !== -1) {
      const sliced = blockRichTexts[length - 1].text.content.substring(
        0,
        lastSlashIndex,
      )
      blockRichTexts[length - 1].text.content = sliced
    }

    return block
  }

  const changeCurrentBlockTag = (tag: BlockTag) => {
    const oldTag = currentBlock.tag
    currentBlock.tag = tag
    switch (tag) {
      case BlockTag.HEADING_1:
        currentBlock.h1 = currentBlock[oldTag]
        currentBlock[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      case BlockTag.HEADING_2:
        currentBlock.h2 = currentBlock[oldTag]
        currentBlock[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      case BlockTag.HEADING_3:
        currentBlock.h3 = currentBlock[oldTag]
        currentBlock[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      case BlockTag.PARAGRAPH:
        currentBlock.p = currentBlock[oldTag]
        currentBlock[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      default:
    }
  }

  const changeCurrentBlockColor = (color: Color) => {
    const curr = currentBlock[currentBlock.tag]
    if (curr) curr.color = color
  }

  const addBlockHandler = (
    beneathIndex: number,
    ref: HTMLElement | null,
    tag: BlockTag,
  ) => {
    const tempBlocks = [...blocks]
    const newBlock: Block = {
      id: uuidv4(),
      index: beneathIndex + 1,
      tag,
      p: undefined,
    }
    newBlock[tag] = {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: '',
          },
        },
      ],
      color: Color.DEFAULT,
    }
    tempBlocks.splice(beneathIndex + 1, 0, newBlock)
    for (let i = beneathIndex + 2; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index += 1
    }
    setBlocks(tempBlocks, () => {
      setCurrentBlock(newBlock)
      const next: HTMLElement | null = ref?.nextSibling as HTMLElement
      if (next) next.focus()
    })
  }

  const deleteBlockHandler = (index: number, ref: HTMLElement | null) => {
    // Only delete the block, if there is a preceding one
    const previousBlock = ref?.previousElementSibling as HTMLElement
    if (previousBlock) {
      const tempBlocks = [...blocks]
      for (let i = currentBlock.index + 1; i < tempBlocks.length; i += 1) {
        tempBlocks[i].index -= 1
      }
      tempBlocks.splice(currentBlock.index, 1)
      setBlocks(tempBlocks, () => {
        setCurrentBlock(tempBlocks[index - 1])
        setCaretToEnd(previousBlock)
        previousBlock.focus()
      })
    }
  }

  return (
    <div className="max-w-none prose prose-h1:text-4xl prose-h1:my-6 prose-h1:font-semibold prose-h1:text-current prose-h2:text-3xl prose-h2:my-5 prose-h2:font-semibold prose-h2:text-current prose-h3:text-2xl prose-h3:my-4 prose-h3:font-semibold prose-h3:text-current prose-p:my-3 prose-p:text-lg prose-p:text-current">
      {blocks.map((block: Block) => (
        <FlowBlock
          key={block.id}
          block={block}
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
          editBlock={editCurrentBlock}
          changeBlockTag={changeCurrentBlockTag}
          changeBlockColor={changeCurrentBlockColor}
          updatePage={updatePageHandler}
          addBlock={addBlockHandler}
          deleteBlock={deleteBlockHandler}
          restoreBlockAndChangeColor={restoreBlockAndChangeColor}
          currentCaretIndex={currentCaretIndex}
          setCurrentCaretIndex={setCurrentCaretIndex}
          previousBlock={block.index > 0 ? blocks[block.index - 1] : undefined}
          nextBlock={
            block.index < blocks.length - 1
              ? blocks[block.index + 1]
              : undefined
          }
        />
      ))}
    </div>
  )
}
