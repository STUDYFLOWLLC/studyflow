import FlowBlock from 'components/Flow/FlowBlock'
import React from 'react'
import { Block, BlockTag, Color, RichTextType } from 'types/Flow'
import { setCaretToEnd } from 'utils/caretHelpers'
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
interface State {
  blocks: Block[]
}

const initialBlock: Block = {
  id: uuidv4(),
  tag: BlockTag.PARAGRAPH,
  paragraph: {
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

class FlowPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.updatePageHandler = this.updatePageHandler.bind(this)
    this.addBlockHandler = this.addBlockHandler.bind(this)
    this.deleteBlockHandler = this.deleteBlockHandler.bind(this)
    this.state = { blocks: [initialBlock] }
  }

  updatePageHandler(updatedBlock) {
    const { blocks } = this.state
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id)
    const updatedBlocks = [...blocks]
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      paragraph: updatedBlock.paragraph,
    }
    this.setState({ blocks: updatedBlocks })
  }

  addBlockHandler(currentBlock) {
    const newBlock = {
      id: uuidv4(),
      tag: BlockTag.PARAGRAPH,
      paragraph: { richText: [], color: Color.RED },
    }
    const { blocks } = this.state
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id)
    const updatedBlocks = [...blocks]
    updatedBlocks.splice(index + 1, 0, newBlock)
    this.setState({ blocks: updatedBlocks }, () => {
      currentBlock.ref.nextElementSibling.focus()
    })
  }

  deleteBlockHandler(currentBlock) {
    // Only delete the block, if there is a preceding one
    const previousBlock = currentBlock.ref.previousElementSibling
    if (previousBlock) {
      const { blocks } = this.state
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id)
      const updatedBlocks = [...blocks]
      updatedBlocks.splice(index, 1)
      this.setState({ blocks: updatedBlocks }, () => {
        setCaretToEnd(previousBlock)
        previousBlock.focus()
      })
    }
  }

  render() {
    const { blocks } = this.state
    return (
      <div className="Page">
        {blocks.map((block) => (
          <FlowBlock
            key={block.id}
            id={block.id}
            block={block}
            tag={block.tag}
            html=""
            updatePage={this.updatePageHandler}
            addBlock={this.addBlockHandler}
            deleteBlock={this.deleteBlockHandler}
          />
        ))}
      </div>
    )
  }
}

export default FlowPage
