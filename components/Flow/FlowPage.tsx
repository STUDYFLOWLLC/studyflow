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
    color: Color.RED,
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
    const currentRichText = currentBlock[currentBlock.tag]?.richText[0]
    richTextEditor(currentRichText, e.target.value)
  }

  const changeCurrentBlockTag = (tag: BlockTag) => {
    currentBlock.tag = tag
    switch (tag) {
      case BlockTag.HEADING_1:
        currentBlock.h1 = currentBlock.p
        currentBlock.p = undefined
        break
      default:
    }
  }

  const addBlockHandler = ({ ref }: addDeleteParams) => {
    const tempBlocks = [...blocks]
    const newBlock: Block = {
      id: uuidv4(),
      index: currentBlock.index + 1,
      tag: BlockTag.PARAGRAPH,
      p: {
        richText: [
          {
            type: RichTextType.TEXT,
            text: {
              content: '',
            },
          },
        ],
        color: Color.RED,
      },
    }
    tempBlocks.splice(currentBlock.index + 1, 0, newBlock)
    for (let i = currentBlock.index + 2; i < tempBlocks.length; i += 1) {
      tempBlocks[i].index += 1
    }
    setBlocks(tempBlocks, () => {
      const next: HTMLElement | null = ref?.nextSibling as HTMLElement
      if (next) next.focus()
    })
  }

  const deleteBlockHandler = ({ ref }: addDeleteParams) => {
    // Only delete the block, if there is a preceding one
    const previousBlock = ref?.previousElementSibling as HTMLElement
    if (previousBlock) {
      const tempBlocks = [...blocks]
      for (let i = currentBlock.index + 1; i < tempBlocks.length; i += 1) {
        tempBlocks[i].index -= 1
      }
      tempBlocks.splice(currentBlock.index, 1)
      setBlocks(tempBlocks, () => {
        setCaretToEnd(previousBlock)
        previousBlock.focus()
      })
    }
  }

  return (
    <div>
      {blocks.map((block: Block) => (
        <FlowBlock
          key={block.id}
          id={block.id}
          block={block}
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
          editBlock={editCurrentBlock}
          changeBlockTag={changeCurrentBlockTag}
          updatePage={updatePageHandler}
          addBlock={addBlockHandler}
          deleteBlock={deleteBlockHandler}
        />
      ))}
    </div>
  )
}
