import classNames from 'classnames'
import FlowMenu from 'components/Flow/FlowMenu'
import { addDeleteParams } from 'components/Flow/FlowPage'
import React from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { Block, BlockTag, Color } from 'types/Flow'
import blockParser from 'utils/blockParser'
import {
  getCaretCoordinates,
  getCaretIndex,
  setCaretToPosition,
} from 'utils/caretHelpers'
import determinePlaceholder from 'utils/determinePlaceholder'
import { removeHTMLTags } from 'utils/richTextEditor'

interface Props {
  block: Block
  editBlock: (e: ContentEditableEvent) => void
  changeBlockTag: (tag: BlockTag) => void
  changeBlockColor: (color: Color) => void
  updatePage: (block: Block) => void
  addBlock: ({ ref }: addDeleteParams, tag: BlockTag) => void
  deleteBlock: ({ ref }: addDeleteParams) => void
  currentBlock: Block
  setCurrentBlock: (block: Block) => void
  restoreBlockAndChangeColor: (block: Block, color: Color) => Block
  currentCaretIndex: number
  setCurrentCaretIndex: (index: number) => void
}
interface State {
  contentEditable: React.RefObject<HTMLElement>
  html: string
  previousKey: string
  tempBlock: Block
  selectMenuIsOpen: boolean
  selectMenuPosition: {
    x: number | null | undefined
    y: number | null | undefined
  }
  openedMenuInEmptyBlock: boolean
  focused: boolean
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
    this.tagSelectionHandlerNew = this.tagSelectionHandlerNew.bind(this)
    this.colorSelectionHandler = this.colorSelectionHandler.bind(this)

    const { block } = props
    this.state = {
      contentEditable: React.createRef(),
      html: '',
      previousKey: '',
      tempBlock: block,
      selectMenuIsOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
      openedMenuInEmptyBlock: false,
      focused: false,
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
    const { block } = this.props
    const tagChanged = prevProps.block.tag !== block.tag
    if (tagChanged) {
      const { updatePage } = this.props
      updatePage(block)
    }
  }

  onChangeHandler(e: ContentEditableEvent) {
    const { setCurrentCaretIndex } = this.props
    const { contentEditable } = this.state
    const caretIndex = getCaretIndex(contentEditable.current)
    setCurrentCaretIndex(caretIndex)
    const { block, editBlock } = this.props
    const stripped = removeHTMLTags(e.target.value)
    if (stripped.charAt(caretIndex - 1) === '/')
      this.setState({ tempBlock: structuredClone(block) })
    editBlock(e)
    this.setState({ html: blockParser(block) })
  }

  onKeyDownHandler(e: { key: string; preventDefault: () => void }) {
    const { selectMenuIsOpen, contentEditable } = this.state
    const {
      setCurrentBlock,
      block,
      changeBlockColor,
      currentCaretIndex,
      setCurrentCaretIndex,
    } = this.props

    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
      // setCurrentBlock(block)
      // setCurrentCaretIndex(getCaretIndex(contentEditable.current))
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setCurrentCaretIndex(getCaretIndex(contentEditable.current))
    }
    if (e.key === 'ArrowUp' && !selectMenuIsOpen) {
      e.preventDefault()
      const { contentEditable } = this.state
      if (contentEditable.current?.previousElementSibling) {
        setCaretToPosition(
          contentEditable.current?.previousElementSibling as HTMLElement,
          currentCaretIndex,
        )
      }
    }
    if (e.key === 'ArrowDown' && !selectMenuIsOpen) {
      e.preventDefault()
      const { contentEditable } = this.state
      if (contentEditable.current?.nextElementSibling) {
        setCaretToPosition(
          contentEditable.current?.nextSibling as HTMLElement,
          currentCaretIndex,
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
        setCurrentBlock(block)
        const { addBlock } = this.props
        const { contentEditable } = this.state
        addBlock({ ref: contentEditable.current }, BlockTag.PARAGRAPH)
      }
    }
    if (e.key === 'Backspace' && blockParser(block) === '') {
      e.preventDefault()
      if (block[block.tag]?.color !== Color.DEFAULT) {
        changeBlockColor(Color.DEFAULT)
      } else {
        const { deleteBlock } = this.props
        const { contentEditable } = this.state
        deleteBlock({
          ref: contentEditable.current,
        })
      }
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
    const { html } = this.state
    if (removeHTMLTags(html) === '/')
      this.setState({ openedMenuInEmptyBlock: true })
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
    const { contentEditable } = this.state
    changeBlockTag(tag)
    this.setState({ html: blockParser(block) })
    this.closeSelectMenuHandler()
    contentEditable.current?.focus()
  }

  tagSelectionHandlerNew(tag: BlockTag) {
    const { block, addBlock } = this.props
    const { contentEditable, openedMenuInEmptyBlock } = this.state
    if (openedMenuInEmptyBlock) return this.tagSelectionHandler(tag)
    this.setState({ html: blockParser(block) })
    addBlock({ ref: contentEditable.current }, tag)
    this.closeSelectMenuHandler()
  }

  colorSelectionHandler(color: Color) {
    const { restoreBlockAndChangeColor } = this.props
    const { contentEditable, tempBlock } = this.state
    const newBlock = restoreBlockAndChangeColor(tempBlock, color)
    this.setState({ html: blockParser(newBlock) })
    this.closeSelectMenuHandler()
    contentEditable.current?.focus()
  }

  render() {
    const { block, currentBlock, setCurrentCaretIndex, setCurrentBlock } =
      this.props
    const {
      selectMenuIsOpen,
      selectMenuPosition,
      contentEditable,
      html,
      focused,
    } = this.state

    return (
      <>
        <ContentEditable
          className={classNames(
            { 'my-3 text-lg': block.tag === BlockTag.PARAGRAPH },
            {
              'text-4xl font-semibold my-6': block.tag === BlockTag.HEADING_1,
            },
            { 'text-3xl font-semibold my-5': block.tag === BlockTag.HEADING_2 },
            { 'text-2xl font-semibold my-4': block.tag === BlockTag.HEADING_3 },
            {
              'h-6 text-opacity-40': html === '' && block[block.tag]?.color,
            },
            block[block.tag]?.color,
            'outline-none',
          )}
          innerRef={contentEditable}
          html={html}
          placeholder={
            (focused && block.tag === BlockTag.PARAGRAPH) ||
            (html === '' && block.tag !== BlockTag.PARAGRAPH)
              ? determinePlaceholder(block.tag)
              : ''
          }
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onKeyUp={this.onKeyUpHandler}
          onFocus={() => {
            this.setState({ focused: true })
            // setCurrentBlock(block)
          }}
          onBlur={() => {
            this.setState({ focused: false })
          }}
          onClick={() => {
            setCurrentCaretIndex(getCaretIndex(contentEditable.current))
          }}
        />
        {selectMenuIsOpen && (
          <FlowMenu
            position={selectMenuPosition}
            // onTagSelect={this.tagSelectionHandler}
            onTagSelectNew={this.tagSelectionHandlerNew}
            onColorSelect={this.colorSelectionHandler}
            close={this.closeSelectMenuHandler}
          />
        )}
      </>
    )
  }
}

export default FlowBlock
