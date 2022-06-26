/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

import FlowBlock from 'components/Flow/FlowBlock'
import { useState } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'
import { useHotkeys } from 'react-hotkeys-hook'
import { Block, BlockTag, Color, RichText, RichTextType } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { UpdatePropertyCommand } from 'utils/commandPattern/common/commands/updatePropertyCommand'
import changeBlockColor from 'utils/flows/changeBlockColor'
import getRawTextLength from 'utils/getRawTextLength'
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

const commandHandler = new CommandHandler()

export default function FlowPage() {
  const [blocks, setBlocks] = useStateCallback([initialBlock, secondBlock])
  const [currentBlock, setCurrentBlock] = useStateCallback(initialBlock)
  const [currentCaretIndex, setCurrentCaretIndex] = useState(0)
  const [rerenderDetector, setRerenderDetector] = useState(-1)

  // console.log(`Current Block ${currentBlock.index}`)
  // console.log(`Current Caret Index ${currentCaretIndex}`)
  // console.log('')

  const restoreBlockAndChangeColor = (
    commandHandler: CommandHandler,
    newBlock: Block,
    color: Color,
  ) => {
    const tempBlocks = [...blocks]
    tempBlocks[newBlock.index] = newBlock
    setBlocks(tempBlocks)
    changeBlockColor(commandHandler, newBlock, color)
    setCurrentBlock(newBlock)

    return newBlock
  }

  // iterate through blocks and find the current block based on caret index
  const findCurrentRichTextBlock = (): RichText => {
    let charactersProgressed = 0
    const blockRichText = currentBlock[currentBlock.tag].richText
    for (let i = 0; i < blockRichText.length; i += 1) {
      if (
        charactersProgressed + blockRichText[i].text.content.length >=
        currentCaretIndex
      ) {
        return blockRichText[i]
      }
      charactersProgressed += blockRichText[i].text.content.length
    }
    return blockRichText[blockRichText.length - 1]
  }

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

  const editCurrentBlock = (e: ContentEditableEvent) => {
    const richText = currentBlock[currentBlock.tag]?.richText
    if (richText) {
      let totalRawLength = 0
      for (let i = 0; i < richText.length; i += 1) {
        totalRawLength += richText[i].text.content.length
      }
      const currentRichText = findCurrentRichTextBlock()

      if (currentRichText.text) {
        commandHandler.execute(
          'update-property',
          new UpdatePropertyCommand({
            target: currentRichText.text,
            propertyName: 'content',
            newValue: richTextEditor(
              currentRichText,
              e.target.value,
              currentCaretIndex,
              totalRawLength,
            ),
          }),
        )
      }
    }
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
      setCurrentCaretIndex(0)
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
        setCurrentCaretIndex(getRawTextLength(tempBlocks[index - 1]))
        previousBlock.focus()
      })
    }
  }

  const joinBlocks = (
    block1: Block,
    block2: Block,
    ref: HTMLElement | null,
  ) => {
    const previousBlock = ref?.previousElementSibling as HTMLElement
    if (!previousBlock) return

    const block1RichText = block1[block1.tag]?.richText
    const block2RichText = block2[block2.tag]?.richText
    const previousLength = getRawTextLength(block1)
    if (!block1RichText || !block2RichText) return

    const newBlockRichText = [...block1RichText, ...block2RichText]
    if (block1[block1.tag]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error this shit just doesn't work ignore
      block1[block1.tag].richText = newBlockRichText
    }

    const tempBlocks = [...blocks]
    for (let i = currentBlock.index + 1; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index -= 1
    }
    tempBlocks.splice(currentBlock.index, 1)

    setBlocks(tempBlocks, () => {
      setRerenderDetector(block1.index)
      setCurrentCaretIndex(previousLength)
      setCurrentBlock(block1)
    })
  }

  const boldHandler = (block: Block) => {
    const richText = block[block.tag]?.richText
    if (richText) {
      const lastRichText = richText[richText.length - 1]
      if (!lastRichText.annotations?.bold) {
        block[block.tag]?.richText.push({
          type: RichTextType.TEXT,
          annotations: { bold: true },
          text: {
            content: '',
          },
        })
      } else {
        block[block.tag]?.richText.push({
          type: RichTextType.TEXT,
          text: {
            content: '',
          },
        })
      }
    }
  }

  useHotkeys(
    'cmd+b, ctrl+b',
    (e) => {
      e.preventDefault()
      boldHandler(currentBlock)
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
      enableOnContentEditable: true,
    },
    [],
  )

  useHotkeys(
    'cmd+z, ctrl+z',
    (e) => {
      e.preventDefault()
      const result = commandHandler.undo()
      console.log(result)
      setRerenderDetector(currentBlock.index)
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
      enableOnContentEditable: true,
    },
    [],
  )

  useHotkeys(
    'cmd+shift+z, ctrl+shift+z',
    (e) => {
      e.preventDefault()
      const result = commandHandler.redo()
      console.log(result)
      setRerenderDetector(currentBlock.index)
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
      enableOnContentEditable: true,
    },
    [],
  )

  return (
    <div className="max-w-none prose prose-h1:text-4xl prose-h1:my-6 prose-h1:font-semibold prose-h1:text-current prose-h2:text-3xl prose-h2:my-5 prose-h2:font-semibold prose-h2:text-current prose-h3:text-2xl prose-h3:my-4 prose-h3:font-semibold prose-h3:text-current prose-p:my-3 prose-p:text-lg prose-p:text-current">
      {blocks.map((block: Block) => (
        <FlowBlock
          key={block.id}
          commandHandler={commandHandler}
          block={block}
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
          editBlock={editCurrentBlock}
          changeBlockTag={changeCurrentBlockTag}
          changeBlockColor={changeBlockColor}
          updatePage={updatePageHandler}
          addBlock={addBlockHandler}
          deleteBlock={deleteBlockHandler}
          joinBlocks={joinBlocks}
          restoreBlockAndChangeColor={restoreBlockAndChangeColor}
          currentCaretIndex={currentCaretIndex}
          setCurrentCaretIndex={setCurrentCaretIndex}
          previousBlock={block.index > 0 ? blocks[block.index - 1] : undefined}
          nextBlock={
            block.index < blocks.length - 1
              ? blocks[block.index + 1]
              : undefined
          }
          rerenderDetector={rerenderDetector}
          setRerenderDetector={setRerenderDetector}
        />
      ))}
    </div>
  )
}
