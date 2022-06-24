import classNames from 'classnames'
import FlowMenu from 'components/Flow/FlowMenu'
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
  addBlock: (
    beneathIndex: number,
    ref: HTMLElement | null,
    tag: BlockTag,
  ) => void
  deleteBlock: (index: number, ref: HTMLElement | null) => void
  currentBlock: Block
  setCurrentBlock: (block: Block, callback?: () => void) => void
  restoreBlockAndChangeColor: (block: Block, color: Color) => Block
  currentCaretIndex: number
  setCurrentCaretIndex: (index: number) => void
  previousBlock: Block | undefined
  nextBlock: Block | undefined
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
    this.convertTagSelectionHandler = this.convertTagSelectionHandler.bind(this)
    this.tagSelectionHandler = this.tagSelectionHandler.bind(this)
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
    const { currentCaretIndex, setCurrentCaretIndex } = this.props
    const { contentEditable, selectMenuIsOpen } = this.state
    const {
      setCurrentBlock,
      block,
      changeBlockColor,
      previousBlock,
      nextBlock,
    } = this.props

    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setCurrentCaretIndex(getCaretIndex(contentEditable.current))
    }

    if (e.key === 'ArrowUp' && !selectMenuIsOpen) {
      e.preventDefault()
      const { contentEditable } = this.state
      if (contentEditable.current?.previousElementSibling) {
        if (previousBlock) {
          setCurrentBlock(previousBlock, () => {
            setCaretToPosition(
              contentEditable.current?.previousElementSibling as HTMLElement,
              currentCaretIndex,
            )
          })
        } else {
          setCaretToPosition(
            contentEditable.current?.previousElementSibling as HTMLElement,
            currentCaretIndex,
          )
        }
      }
    }
    if (e.key === 'ArrowDown' && !selectMenuIsOpen) {
      e.preventDefault()
      const { contentEditable } = this.state
      if (contentEditable.current?.nextElementSibling) {
        if (nextBlock) {
          setCurrentBlock(nextBlock, () => {
            setCaretToPosition(
              contentEditable.current?.nextElementSibling as HTMLElement,
              currentCaretIndex,
            )
          })
        } else {
          setCaretToPosition(
            contentEditable.current?.nextElementSibling as HTMLElement,
            currentCaretIndex,
          )
        }
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
        addBlock(block.index, contentEditable.current, BlockTag.PARAGRAPH)
      }
    }
    if (e.key === 'Backspace' && blockParser(block) === '') {
      e.preventDefault()
      // dont delete the block if it is colored, set the color to default
      if (block[block.tag]?.color !== Color.DEFAULT) {
        changeBlockColor(Color.DEFAULT)
      } else {
        const { deleteBlock } = this.props
        const { contentEditable } = this.state
        deleteBlock(block.index, contentEditable.current)
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
  convertTagSelectionHandler(tag: BlockTag) {
    const { block, changeBlockTag } = this.props
    const { contentEditable } = this.state
    changeBlockTag(tag)
    this.setState({ html: blockParser(block) })
    this.closeSelectMenuHandler()
    contentEditable.current?.focus()
  }

  tagSelectionHandler(tag: BlockTag) {
    const { block, addBlock } = this.props
    const { contentEditable, openedMenuInEmptyBlock } = this.state
    if (openedMenuInEmptyBlock) return this.convertTagSelectionHandler(tag)
    // cleanBlock(block)
    this.setState({ html: blockParser(block) })
    this.closeSelectMenuHandler()
    addBlock(block.index, contentEditable.current, tag)
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
    const { block, currentBlock, setCurrentBlock, setCurrentCaretIndex } =
      this.props
    const { selectMenuIsOpen, selectMenuPosition, contentEditable, html } =
      this.state

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
            (block.id === currentBlock.id &&
              block.tag === BlockTag.PARAGRAPH) ||
            (html === '' && block.tag !== BlockTag.PARAGRAPH)
              ? determinePlaceholder(block.tag)
              : ''
          }
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onKeyUp={this.onKeyUpHandler}
          onClick={() => {
            setCurrentBlock(block)
            setCurrentCaretIndex(getCaretIndex(contentEditable.current))
          }}
        />
        {selectMenuIsOpen && (
          <FlowMenu
            position={selectMenuPosition}
            // onTagSelect={this.tagSelectionHandler}
            onTagSelect={this.tagSelectionHandler}
            onColorSelect={this.colorSelectionHandler}
            close={this.closeSelectMenuHandler}
          />
        )}
      </>
    )
  }
}

export default FlowBlock
