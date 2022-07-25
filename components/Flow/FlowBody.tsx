/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames'
import FlowBlock from 'components/Flow/FlowBlock'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import FlipMove from 'react-flip-move'
import { Color } from 'types/Colors'
import { Block, BlockTag, RichTextType } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { setCaretToPosition } from 'utils/flows/caretHelpers'
import changeBlockColor from 'utils/flows/changeBlockColor'
import getNextFromRef from 'utils/flows/getNextFromRef'
import getPrevFromRef from 'utils/flows/getPrevFromRef'
import getRawTextLength from 'utils/flows/getRawTextLength'
import sliceBlock from 'utils/flows/sliceRichText'
import useStateCallback from 'utils/flows/useStateCallback'
import { v4 as uuidv4 } from 'uuid'

export interface addDeleteParams {
  ref: HTMLElement | null
}

const commandHandler = new CommandHandler()

interface Props {
  initialBlocks: Block[]
  saveFlow: (blocks: Block[]) => Promise<void>
  setFauxSaving: (fauxSaving: boolean) => void
  setDragSetter?: (value: boolean) => void
}

export default function FlowBody({
  initialBlocks,
  saveFlow,
  setFauxSaving,
  setDragSetter,
}: Props) {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [blocks, setBlocks] = useStateCallback(initialBlocks)
  const [changesMade, setChangesMade] = useState(false)
  const [currentCaretIndex, setCurrentCaretIndex] = useState(0)
  const [rerenderDetector, setRerenderDetector] = useState(-1)
  const [animatingBlock, setAnimatingBlock] = useState(false)

  const saveFlowLocal = async () => {
    setFauxSaving(false)
    if (changesMade) {
      setChangesMade(false)
      await saveFlow(blocks)
    }
  }

  useEffect(() => {
    const saveInterval = setInterval(() => {
      saveFlowLocal()
    }, 5000)
    return () => clearInterval(saveInterval)
  }, [changesMade])

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
    insertAbove?: boolean,
  ) => {
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
      const next: HTMLElement | null = getNextFromRef(ref)
      if (next && !insertAbove) next.focus()
    })
  }

  const deleteBlock = (index: number, ref: HTMLElement | null) => {
    // Only delete the block, if there is a preceding one
    const previous = getPrevFromRef(ref)
    if (!previous) return

    const tempBlocks = [...blocks]
    for (let i = index + 1; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index -= 1
    }
    tempBlocks.splice(index, 1)
    setBlocks(tempBlocks, () => {
      setCaretToPosition(previous)
    })
  }

  const joinBlocks = (
    block1: Block,
    block2: Block,
    ref: HTMLElement | null,
  ) => {
    const previousBlock = getPrevFromRef(ref)
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
    const richTexts = block1[block1.tag]?.richText
    if (richTexts === undefined) return

    const sliceIndex = sliceBlock(richTexts, caretIndex)
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
    setAnimatingBlock(true)
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
    setTimeout(() => setAnimatingBlock(false), 500)
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

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="fnasohghp893">
        {(provided) => (
          <div
            onMouseDown={() => {
              if (setDragSetter) setDragSetter(true)
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classNames(
              'max-w-3xl mx-auto overflow-none prose',
              'prose-h1:text-4xl prose-h1:my-0 prose-h1:py-[0.4rem] prose-h1:font-bold prose-h1:text-current prose-h1:leading-normal',
              'prose-h2:text-3xl prose-h2:my-0 prose-h2:py-[0.35rem] prose-h2:font-bold prose-h2:text-current prose-h2:leading-normal',
              'prose-h3:text-2xl prose-h3:my-0 prose-h3:py-[0.3rem] prose-h3:font-bold prose-h3:text-current prose-h3:leading-normal',
              'prose-p:text-lg prose-p:my-0 prose-p:py-[0.25rem] prose-p:text-current prose-p:leading-normal',
            )}
          >
            {/* @ts-expect-error flipmove not in typescript */}
            <FlipMove duration={200} easing="ease-out" disableAllAnimations>
              {blocks.map((block: Block) => (
                <FlowBlock
                  key={block.id}
                  theme={theme}
                  setTheme={setTheme}
                  setChangesMade={setChangesMade}
                  setFauxSaving={setFauxSaving}
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
                />
              ))}
            </FlipMove>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
