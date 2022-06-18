import FlowMenu from 'components/Flow/FlowMenu'
import React from 'react'
import ContentEditable from 'react-contenteditable'
import { Block, BlockTag } from 'types/Flow'
import blockParser from 'utils/blockParser'
import { getCaretCoordinates, setCaretToEnd } from 'utils/caretHelpers'
import richTextEditor from 'utils/richTextEditor'

interface Props {
  id: string
  block: Block
  tag: BlockTag
  html: string
  updatePage: (block: Block) => void
  addBlock: (block: Block) => void
  deleteBlock: (block: Block) => void
}
interface State {
  block: Block
  contentEditable: React.RefObject<HTMLElement>
  htmlBackup: string | null
  html: string | null
  tag: BlockTag
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
      block: props.block,
      contentEditable: React.createRef(),
      htmlBackup: null, // needed to store the html temporarely
      html: '',
      tag: BlockTag.PARAGRAPH,
      previousKey: '',
      selectMenuIsOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
    }
  }

  componentDidMount() {
    const { html, tag } = this.props
    this.setState({ html, tag })
  }

  // Update the page component if one of the following is true:
  // 1. user has changed the html content
  // 2. user has changed the tag
  componentDidUpdate(prevProps, prevState) {
    const { html, tag } = this.state
    const htmlChanged = prevState.html !== html
    const tagChanged = prevState.tag !== tag
    if (htmlChanged || tagChanged) {
      const { id, updatePage } = this.props
      const { html, tag } = this.state
      updatePage({
        id,
        html,
        tag,
      })
    }
  }

  onChangeHandler(e: { target: { value: any } }) {
    const { block } = this.state
    const currentRichText = block.paragraph?.richText[0]
    const newRichText = richTextEditor(currentRichText, e.target.value)
    this.setState((prevState) => ({
      block: {
        ...prevState.block,
        paragraph: {
          richText: [newRichText],
        },
      },
    }))
    console.log(this.state.block)
  }

  onKeyDownHandler(e: { key: string; preventDefault: () => void }) {
    if (e.key === CMD_KEY) {
      // If the user starts to enter a command, we store a backup copy of
      // the html. We need this to restore a clean version of the content
      // after the content type selection was finished.
      const { html } = this.state
      this.setState({ htmlBackup: html })
    }
    if (e.key === 'Enter') {
      // While pressing "Enter" should add a new block to the page, we
      // still want to allow line breaks by pressing "Shift-Enter"
      const { previousKey, selectMenuIsOpen } = this.state
      if (previousKey !== 'Shift' && !selectMenuIsOpen) {
        e.preventDefault()
        const { addBlock, id } = this.props
        const { contentEditable } = this.state
        addBlock({
          id,
          ref: contentEditable.current,
        })
      }
    }
    const { html } = this.state
    if (e.key === 'Backspace' && !html) {
      // If there is no content, we delete the block by pressing "Backspace",
      // just as we would remove a line in a regular text container
      e.preventDefault()
      const { deleteBlock, id } = this.props
      const { contentEditable } = this.state
      deleteBlock({
        id,
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
      htmlBackup: null,
      selectMenuIsOpen: false,
      selectMenuPosition: { x: null, y: null },
    })
    document.removeEventListener('click', this.closeSelectMenuHandler)
  }

  // Restore the clean html (without the command), focus the editable
  // with the caret being set to the end, close the select menu
  tagSelectionHandler(tag: BlockTag) {
    const { htmlBackup, contentEditable } = this.state
    this.setState({ tag, html: htmlBackup }, () => {
      setCaretToEnd(contentEditable.current)
      this.closeSelectMenuHandler()
    })
  }

  render() {
    const { block } = this.state
    const { selectMenuIsOpen, selectMenuPosition, contentEditable, tag } =
      this.state
    return (
      <>
        {selectMenuIsOpen && (
          <FlowMenu
            position={selectMenuPosition}
            onSelect={this.tagSelectionHandler}
            close={this.closeSelectMenuHandler}
          />
        )}
        <ContentEditable
          className="outline-none my-2"
          innerRef={contentEditable}
          html={blockParser(block)}
          tagName={tag}
          placeholder="Type '/' for commands"
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onKeyUp={this.onKeyUpHandler}
        />
      </>
    )
  }
}

export default FlowBlock
