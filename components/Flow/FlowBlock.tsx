import classNames from 'classnames'
import FlowMenu from 'components/Flow/FlowMenu'
import { addDeleteParams } from 'components/Flow/FlowPage'
import React from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { Block, BlockTag } from 'types/Flow'
import blockParser from 'utils/blockParser'
import { getCaretCoordinates, setCaretToEnd } from 'utils/caretHelpers'
import determinePlaceholder from 'utils/determinePlaceholder'

interface Props {
  id: string
  block: Block
  editBlock: (e: ContentEditableEvent) => void
  changeBlockTag: (tag: BlockTag) => void
  updatePage: (block: Block) => void
  addBlock: ({ ref }: addDeleteParams) => void
  deleteBlock: ({ ref }: addDeleteParams) => void
  currentBlock: Block
  setCurrentBlock: (block: Block) => void
}
interface State {
  contentEditable: React.RefObject<HTMLElement>
  html: string
  previousKey: string
  selectMenuIsOpen: boolean
  selectMenuPosition: {
    x: number | null | undefined
    y: number | null | undefined
  }
}

const CMD_KEY = '/'

class FlowBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this)
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
    this.openSelectMenuHandler = this.openSelectMenuHandler.bind(this)
    this.closeSelectMenuHandler = this.closeSelectMenuHandler.bind(this)
    this.tagSelectionHandler = this.tagSelectionHandler.bind(this)

    this.state = {
      contentEditable: React.createRef(),
      html: '',
      previousKey: '',
      selectMenuIsOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
    }
  }

  componentDidMount() {
    const { block } = this.props
    this.setState({ html: blockParser(block) })
  }

  // Update the page component if one of the following is true:
  // 1. user has changed the html content
  // 2. user has changed the tag
  componentDidUpdate(prevProps: Props) {
    const { block, updatePage } = this.props
    const tagChanged = prevProps.block.tag !== block.tag
    if (tagChanged) {
      const { id, updatePage } = this.props
      updatePage(block)
    }
  }

  onChangeHandler(e: ContentEditableEvent) {
    const { block, editBlock } = this.props
    editBlock(e)
    this.setState({ html: blockParser(block) })
  }

  onKeyDownHandler(e: { key: string; preventDefault: () => void }) {
    const { setCurrentBlock, block } = this.props
    setCurrentBlock(block)
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const { contentEditable } = this.state
      if (contentEditable.current?.previousElementSibling) {
        setCaretToEnd(
          contentEditable.current?.previousElementSibling as HTMLElement,
        )
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const { contentEditable } = this.state
      if (contentEditable.current?.nextElementSibling) {
        setCaretToEnd(
          contentEditable.current?.nextElementSibling as HTMLElement,
        )
      }
    }
    if (e.key === CMD_KEY) {
      // If the user starts to enter a command, we store a backup copy of
      // the html. We need this to restore a clean version of the content
      // after the content type selection was finished.
    }
    if (e.key === 'Enter') {
      // While pressing "Enter" should add a new block to the page, we
      // still want to allow line breaks by pressing "Shift-Enter"
      const { previousKey, selectMenuIsOpen } = this.state
      if (previousKey !== 'Shift' && !selectMenuIsOpen) {
        e.preventDefault()
        const { addBlock } = this.props
        const { contentEditable } = this.state
        addBlock({ ref: contentEditable.current })
      }
    }
    if (e.key === 'Backspace' && blockParser(block) === '') {
      // If there is no content, we delete the block by pressing "Backspace",
      // just as we would remove a line in a regular text container
      e.preventDefault()
      const { deleteBlock } = this.props
      const { contentEditable } = this.state
      deleteBlock({
        ref: contentEditable.current,
      })
    }
    // Store the key to detect combinations like "Shift-Enter" later on
    this.setState({ previousKey: e.key })
  }

  // The openSelectMenuHandler function needs to be invoked on key up. Otherwise
  // the calculation of the caret coordinates does not work properly.
  onKeyUpHandler(e: { key: string }) {
    if (e.key === CMD_KEY) {
      this.openSelectMenuHandler()
    }
  }

  // After openening the select menu, we attach a click listener to the dom that
  // closes the menu after the next click - regardless of outside or inside menu.
  openSelectMenuHandler() {
    const { x, y } = getCaretCoordinates()
    this.setState({
      selectMenuIsOpen: true,
      selectMenuPosition: { x, y },
    })
    document.addEventListener('click', this.closeSelectMenuHandler)
  }

  closeSelectMenuHandler() {
    this.setState({
      selectMenuIsOpen: false,
      selectMenuPosition: { x: null, y: null },
    })
    document.removeEventListener('click', this.closeSelectMenuHandler)
  }

  // Restore the clean html (without the command), focus the editable
  // with the caret being set to the end, close the select menu
  tagSelectionHandler(tag: BlockTag) {
    const { block, changeBlockTag } = this.props
    changeBlockTag(tag)
    this.setState({ html: blockParser(block) })
    this.closeSelectMenuHandler()
  }

  render() {
    const { block, currentBlock, setCurrentBlock } = this.props
    const { selectMenuIsOpen, selectMenuPosition, contentEditable, html } =
      this.state

    return (
      <>
        <ContentEditable
          className={classNames(
            { 'my-3 text-lg': block.tag === 'p' },
            {
              'text-4xl font-semibold my-6 ': block.tag === BlockTag.HEADING_1,
            },
            { 'text-3xl font-semibold my-5': block.tag === BlockTag.HEADING_2 },
            { 'text-2xl font-semibold my-4': block.tag === BlockTag.HEADING_3 },
            { 'h-6': html === '' },

            'outline-none',
          )}
          innerRef={contentEditable}
          html={html}
          placeholder={
            currentBlock.id === block.id && html === ''
              ? determinePlaceholder(block.tag)
              : ''
          }
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onKeyUp={this.onKeyUpHandler}
          onFocus={() => {
            setCurrentBlock(block)
          }}
        />
        {selectMenuIsOpen && (
          <FlowMenu
            position={selectMenuPosition}
            onSelect={this.tagSelectionHandler}
            close={this.closeSelectMenuHandler}
          />
        )}
      </>
    )
  }
}

export default FlowBlock
