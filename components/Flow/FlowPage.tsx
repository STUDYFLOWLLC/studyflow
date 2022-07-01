/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames'
import FlowBlock from 'components/Flow/FlowBlock'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import changeBlockColor from 'utils/flows/changeBlockColor'
import getRawTextLength from 'utils/getRawTextLength'
import useStateCallback from 'utils/useStateCallback'
import { v4 as uuidv4 } from 'uuid'

export interface addDeleteParams {
  ref: HTMLElement | null
}

const initialBlocks: Block[] = Object.values(Color).map((color, index) => ({
  id: uuidv4(),
  index,
  tag: BlockTag.PARAGRAPH,
  p: {
    richText: [
      {
        type: RichTextType.TEXT,
        text: {
          content: color,
        },
      },
    ],
    color,
  },
}))

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
  const { theme } = useTheme()

  const [blocks, setBlocks] = useStateCallback([...initialBlocks])
  const [currentBlock, setCurrentBlock] = useStateCallback(initialBlock)
  const [currentCaretIndex, setCurrentCaretIndex] = useState(0)
  const [rerenderDetector, setRerenderDetector] = useState(-1)

  // console.log(`Current Block ${currentBlock.index}`)
  // console.log(`Current Caret Index ${currentCaretIndex}`)
  // console.log('')

  const restoreBlockAndChangeColor = (
    commandHandler: CommandHandler,
    element: HTMLElement | null,
    newBlock: Block,
    color: Color,
  ) => {
    const tempBlocks = [...blocks]
    tempBlocks[newBlock.index] = newBlock
    setBlocks(tempBlocks)
    changeBlockColor(
      commandHandler,
      element,
      currentCaretIndex,
      setCurrentCaretIndex,
      newBlock,
      color,
    )
    setCurrentBlock(newBlock)

    return newBlock
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
      const next: HTMLElement | null = ref?.parentElement?.parentElement
        ?.nextElementSibling?.childNodes[0].childNodes[1] as HTMLElement
      if (next) next.focus()
    })
  }

  const deleteBlock = (index: number, ref: HTMLElement | null) => {
    // Only delete the block, if there is a preceding one
    const previous = ref?.parentElement?.parentElement?.previousElementSibling
      ?.childNodes[0].childNodes[1] as HTMLElement
    console.log(previous)
    if (!previous) return

    const tempBlocks = [...blocks]
    for (let i = index + 1; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index -= 1
    }
    tempBlocks.splice(index, 1)
    setBlocks(tempBlocks, () => {
      previous.focus()
    })
  }

  const joinBlocks = (
    block1: Block,
    block2: Block,
    ref: HTMLElement | null,
  ) => {
    const previousBlock = ref?.parentElement?.parentElement
      ?.previousElementSibling?.childNodes[0] as HTMLElement
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

  const reorder = (list: Block[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    if (startIndex > endIndex) {
      result[endIndex].index = endIndex
      for (let i = endIndex + 1; i <= startIndex; i += 1) {
        result[i].index = i
      }
    } else if (endIndex > startIndex) {
      result[startIndex].index = startIndex
      for (let i = startIndex + 1; i <= endIndex; i += 1) {
        result[i].index = i
      }
    }

    return result
  }

  const onEnd = async (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return

    const newBlocks: Block[] = reorder(
      blocks,
      result.source.index,
      result.destination ? result.destination.index : 0,
    )

    setBlocks(newBlocks)
  }

  // useHotkeys(
  //   'cmd+b, ctrl+b',
  //   (e) => {
  //     e.preventDefault()
  //     boldHandler(currentBlock)
  //   },
  //   {
  //     enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
  //     enableOnContentEditable: true,
  //   },
  //   [],
  // )

  // useHotkeys(
  //   'cmd+z, ctrl+z',
  //   (e) => {
  //     e.preventDefault()
  //     commandHandler.undo()
  //     setRerenderDetector(currentBlock.index)
  //   },
  //   {
  //     enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
  //     enableOnContentEditable: true,
  //   },
  //   [],
  // )

  // useHotkeys(
  //   'cmd+shift+z, ctrl+shift+z',
  //   (e) => {
  //     e.preventDefault()
  //     commandHandler.redo()
  //     setRerenderDetector(currentBlock.index)
  //   },
  //   {
  //     enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
  //     enableOnContentEditable: true,
  //   },
  //   [],
  // )

  return (
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="fnasohghp893">
        {(provided) => (
          <div
            className={classNames(
              'max-w-xs prose prose-h1:text-4xl prose-h1:my-0 prose-h1:py-[0.4rem] prose-h1:font-bold prose-h1:text-current prose-h1:leading-normal',
              'prose-h2:text-3xl prose-h2:my-0 prose-h2:py-[0.35rem] prose-h2:font-bold prose-h2:text-current prose-h2:leading-normal',
              'prose-h3:text-2xl prose-h3:my-0 prose-h3:py-[0.3rem] prose-h3:font-bold prose-h3:text-current prose-h3:leading-normal',
              'prose-p:text-lg prose-p:my-0 prose-p:py-[0.25rem] prose-p:text-current prose-p:leading-normal',
            )}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {blocks.map((block: Block) => (
              <FlowBlock
                key={block.id}
                theme={theme}
                commandHandler={commandHandler}
                block={block}
                changeBlockTag={changeCurrentBlockTag}
                updatePage={updatePageHandler}
                addBlock={addBlockHandler}
                deleteBlock={deleteBlock}
                joinBlocks={joinBlocks}
                restoreBlockAndChangeColor={restoreBlockAndChangeColor}
                previousBlock={
                  block.index > 0 ? blocks[block.index - 1] : undefined
                }
                nextBlock={
                  block.index < blocks.length - 1
                    ? blocks[block.index + 1]
                    : undefined
                }
                rerenderDetector={rerenderDetector}
                setRerenderDetector={setRerenderDetector}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
