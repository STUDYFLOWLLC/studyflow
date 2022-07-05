/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames'
import FlowBlock from 'components/Flow/FlowBlock'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import FlipMove from 'react-flip-move'
import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { setCaretToPosition } from 'utils/flows/caretHelpers'
import changeBlockColor from 'utils/flows/changeBlockColor'
import getRawTextLength from 'utils/flows/getRawTextLength'
import sliceBlock from 'utils/flows/sliceBlock'
import useStateCallback from 'utils/flows/useStateCallback'
import { v4 as uuidv4 } from 'uuid'

export interface addDeleteParams {
  ref: HTMLElement | null
}

const initialBlocks: Block[] = Object.values(Color).map((color, index) => ({
  id: uuidv4(),
  index,
  tag: BlockTag.PARAGRAPH,
  tabs: 0,
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
  tabs: 0,
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
  tabs: 0,
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
  const [disableAnimations, setDisableAnimations] = useState(true)

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
      newBlock,
      color,
    )
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

  const changeBlockTag = (block: Block, tag: BlockTag) => {
    const oldTag = block.tag
    block.tag = tag
    switch (tag) {
      case BlockTag.HEADING_1:
        block.h1 = block[oldTag]
        block[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      case BlockTag.HEADING_2:
        block.h2 = block[oldTag]
        block[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      case BlockTag.HEADING_3:
        block.h3 = block[oldTag]
        block[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      case BlockTag.PARAGRAPH:
        block.p = block[oldTag]
        block[oldTag] = undefined
        // blockCleanupAfterCommand(currentBlock)
        break
      default:
    }
  }

  const addBlockHandler = (
    beneathIndex: number,
    ref: HTMLElement | null,
    tag: BlockTag,
    initialContent?: string,
    initialColor?: Color,
  ) => {
    setDisableAnimations(false)
    const tempBlocks = [...blocks]
    const newBlock: Block = {
      id: uuidv4(),
      index: beneathIndex + 1,
      tag,
      tabs: 0,
      p: undefined,
    }
    newBlock[tag] = {
      richText: [
        {
          type: RichTextType.TEXT,
          text: {
            content: initialContent || '',
          },
        },
      ],
      color: initialColor || Color.DEFAULT,
    }
    tempBlocks.splice(beneathIndex + 1, 0, newBlock)
    for (let i = beneathIndex + 2; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index += 1
    }
    setBlocks(tempBlocks, () => {
      const next: HTMLElement | null = ref?.parentElement?.parentElement
        ?.parentElement?.parentElement?.parentElement?.nextElementSibling
        ?.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
        .childNodes[1] as HTMLElement
      if (next) next.focus()
    })
    setTimeout(() => {
      setDisableAnimations(true)
    }, 150)
  }

  const deleteBlock = (index: number, ref: HTMLElement | null) => {
    setDisableAnimations(false)
    // Only delete the block, if there is a preceding one
    const previous = ref?.parentElement?.parentElement?.parentElement
      ?.parentElement?.parentElement?.previousElementSibling?.childNodes[0]
      .childNodes[0].childNodes[0].childNodes[0].childNodes[1] as HTMLElement
    if (!previous) return

    const tempBlocks = [...blocks]
    for (let i = index + 1; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index -= 1
    }
    tempBlocks.splice(index, 1)
    setBlocks(tempBlocks, () => {
      setCaretToPosition(previous)
    })
    setTimeout(() => {
      setDisableAnimations(true)
    }, 150)
  }

  const joinBlocks = (
    block1: Block,
    block2: Block,
    ref: HTMLElement | null,
  ) => {
    const previousBlock = ref?.parentElement?.parentElement?.parentElement
      ?.parentElement?.parentElement?.previousElementSibling?.childNodes[0]
      .childNodes[0].childNodes[0].childNodes[0].childNodes[1] as HTMLElement
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
    for (let i = block2.index + 1; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index -= 1
    }
    tempBlocks.splice(block2.index, 1)

    setBlocks(tempBlocks, () => {
      setRerenderDetector(block1.index)
      setCaretToPosition(previousBlock, previousLength)
    })
  }

  const sliceBlockIntoNew = (
    block1: Block,
    ref: HTMLElement | null,
    caretIndex: number,
  ) => {
    const sliceIndex = sliceBlock(block1, caretIndex)
    if (sliceIndex === undefined) return
    if (sliceIndex === 0) {
      // insert a block above this block
    } else {
      // insert a block below this block with sliced text
      const richTexts = block1[block1.tag]?.richText
      if (richTexts === undefined) return

      let initialText = ''
      for (let i = sliceIndex; i < richTexts.length; i += 1) {
        initialText += richTexts[i].text?.content || ''
      }

      richTexts.length = sliceIndex
      setRerenderDetector(block1.index)

      addBlockHandler(
        block1.index,
        ref,
        block1.tag,
        initialText,
        block1[block1.tag]?.color,
      )
    }
  }

  const swapBlocks = (block1: Block, block2: Block) => {
    const tempBlocks = [...blocks]
    const block1Index = block1.index
    const block2Index = block2.index
    ;[tempBlocks[block1Index], tempBlocks[block2Index]] = [
      tempBlocks[block2Index],
      tempBlocks[block1Index],
    ]
    tempBlocks[block1Index].index = block1Index
    tempBlocks[block2Index].index = block2Index
    setBlocks(tempBlocks)
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
              'overflow-none max-w-none prose prose-h1:text-4xl prose-h1:my-0 prose-h1:py-[0.4rem] prose-h1:font-bold prose-h1:text-current prose-h1:leading-normal',
              'prose-h2:text-3xl prose-h2:my-0 prose-h2:py-[0.35rem] prose-h2:font-bold prose-h2:text-current prose-h2:leading-normal',
              'prose-h3:text-2xl prose-h3:my-0 prose-h3:py-[0.3rem] prose-h3:font-bold prose-h3:text-current prose-h3:leading-normal',
              'prose-p:text-lg prose-p:my-0 prose-p:py-[0.25rem] prose-p:text-current prose-p:leading-normal',
            )}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {/* @ts-expect-error flipmove not in typescript */}
            <FlipMove
              duration={250}
              disableAllAnimations={disableAnimations}
              easing="ease-out"
            >
              {blocks.map((block: Block) => (
                <FlowBlock
                  key={block.id}
                  theme={theme}
                  commandHandler={commandHandler}
                  updatePage={updatePageHandler}
                  block={block}
                  previousBlock={
                    block.index > 0 ? blocks[block.index - 1] : undefined
                  }
                  nextBlock={
                    block.index < blocks.length - 1
                      ? blocks[block.index + 1]
                      : undefined
                  }
                  changeBlockTag={changeBlockTag}
                  restoreBlockAndChangeColor={restoreBlockAndChangeColor}
                  addBlock={addBlockHandler}
                  deleteBlock={deleteBlock}
                  joinBlocks={joinBlocks}
                  sliceBlockIntoNew={sliceBlockIntoNew}
                  swapBlocks={swapBlocks}
                  rerenderDetector={rerenderDetector}
                  setRerenderDetector={setRerenderDetector}
                  setDisableAnimations={setDisableAnimations}
                />
              ))}

              {provided.placeholder}
            </FlipMove>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
