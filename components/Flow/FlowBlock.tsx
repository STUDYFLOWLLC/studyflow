import { PlusIcon, ViewGridIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FlowMenu from 'components/Flow/FlowMenu'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Color } from 'types/Colors'
import { Block, BlockTag } from 'types/Flow'
import blockParser from 'utils/blockParser'
import {
  getCaretCoordinates,
  getCaretIndex,
  setCaretToPosition,
} from 'utils/caretHelpers'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import ContentEditable, { ContentEditableEvent } from 'utils/ContentEditable'
import determinePlaceholder from 'utils/determinePlaceholder'
import altDeleteRichText from 'utils/flows/altDeleteRichText'
import deleteInBlock from 'utils/flows/deleteInBlock'
import insertBold from 'utils/flows/insertBold'
import insertIntoBlock from 'utils/flows/insertIntoBlock'
import isAlphaNumericOrSymbol from 'utils/flows/isAlphaNumericOrSymbol'
import { removeHTMLTags } from 'utils/richTextEditor'

interface Props {
  theme: string | undefined
  commandHandler: CommandHandler
  block: Block
  changeBlockTag: (tag: BlockTag) => void
  updatePage: (block: Block) => void
  addBlock: (
    beneathIndex: number,
    ref: HTMLElement | null,
    tag: BlockTag,
  ) => void
  deleteBlock: (index: number, ref: HTMLElement | null) => void
  joinBlocks: (block1: Block, block2: Block, ref: HTMLElement | null) => void
  restoreBlockAndChangeColor: (
    commandHandler: CommandHandler,
    element: HTMLElement | null,
    block: Block,
    color: Color,
  ) => Block
  previousBlock: Block | undefined
  nextBlock: Block | undefined
  rerenderDetector: number
  setRerenderDetector: (detector: number) => void
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
  showDragger: boolean
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
    this.convertTagSelectionHandler = this.convertTagSelectionHandler.bind(this)
    this.tagSelectionHandler = this.tagSelectionHandler.bind(this)
    this.colorSelectionHandler = this.colorSelectionHandler.bind(this)

    const { block } = props
    this.state = {
      contentEditable: React.createRef(),
      html: blockParser(block),
      previousKey: '',
      tempBlock: block,
      selectMenuIsOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
      openedMenuInEmptyBlock: false,
      showDragger: false,
      focused: false,
    }
  }

  // Update the page component if one of the following is true:
  // 1. user has changed the html content
  // 2. user has changed the tag
  componentDidUpdate(prevProps: Props) {
    const { block, rerenderDetector, setRerenderDetector, updatePage } =
      this.props
    const { contentEditable } = this.state
    const tagChanged = prevProps.block.tag !== block.tag

    // rerender for joinblock and set caret index
    if (
      prevProps.rerenderDetector !== rerenderDetector &&
      block.index === rerenderDetector
    ) {
      console.log('rerender detector')
      this.setState({ html: blockParser(block) }, () => {
        setRerenderDetector(-1)
      })
    }

    if (tagChanged) {
      updatePage(block)
    }
  }

  onChangeHandler(e: ContentEditableEvent) {
    const { block } = this.props
    // console.log(blockParser(block))
    // console.log(e.target.value)

    this.setState({ html: blockParser(block) })
    // const { commandHandler, block, currentCaretIndex, setCurrentCaretIndex } =
    //   this.props
    // const { contentEditable } = this.state
    // const caretIndex = getCaretIndex(contentEditable.current)
    // setCurrentCaretIndex(caretIndex)
    // const stripped = removeHTMLTags(e.target.value)
    // if (stripped.charAt(caretIndex - 1) === '/') {
    //   this.setState({ tempBlock: structuredClone(block) })
    // }
    // editBlock(
    //   commandHandler,
    //   e,
    //   contentEditable.current,
    //   block,
    //   currentCaretIndex,
    //   setCurrentCaretIndex,
    // )
    // this.setState({ html: blockParser(block) })
  }

  onKeyDownHandler(e: KeyboardEvent) {
    const {
      commandHandler,
      block,
      setRerenderDetector,
      previousBlock,
      nextBlock,
    } = this.props
    const { contentEditable, selectMenuIsOpen, previousKey } = this.state

    if (previousKey === 'Meta' || previousKey === 'Control') {
      switch (e.key) {
        case 'b':
          insertBold(block, getCaretIndex(contentEditable.current))
          break
        default:
          break
      }
    } else if (isAlphaNumericOrSymbol(e.key)) {
      insertIntoBlock(block, e.key, getCaretIndex(contentEditable.current))
    }

    if (e.key === 'Backspace' && previousKey !== 'Alt') {
      deleteInBlock(block, getCaretIndex(contentEditable.current))
    } else if (e.key === 'Backspace' && previousKey === 'Alt') {
      altDeleteRichText(block, getCaretIndex(contentEditable.current))
    }

    // if (e.key === 'ArrowLeft') {
    //   setCurrentCaretIndex(
    //     Math.max(getCaretIndex(contentEditable.current) - 1, 0),
    //   )
    // } else if (e.key === 'ArrowRight') {
    //   setCurrentCaretIndex(
    //     Math.min(
    //       getCaretIndex(contentEditable.current) + 1,
    //       getRawTextLength(block),
    //     ),
    //   )
    // }

    if (e.key === 'ArrowUp' && !selectMenuIsOpen) {
      e.preventDefault()
      const { contentEditable } = this.state
      const previous = contentEditable.current?.parentElement?.parentElement
        ?.previousElementSibling?.childNodes[0]?.childNodes[1] as HTMLElement
      if (previous) {
        setCaretToPosition(previous, getCaretIndex(contentEditable.current))
      }
    }
    if (e.key === 'ArrowDown' && !selectMenuIsOpen) {
      e.preventDefault()
      const { contentEditable } = this.state
      const next: HTMLElement | null = contentEditable.current?.parentElement
        ?.parentElement?.nextElementSibling?.childNodes[0]
        ?.childNodes[1] as HTMLElement
      if (next) {
        setCaretToPosition(next, getCaretIndex(contentEditable.current))
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
    // if (e.key === 'Backspace' && blockParser(block) === '') {
    //   e.preventDefault()
    //   // dont delete the block if it is colored, set the color to default
    //   if (block[block.tag]?.color !== Color.DEFAULT) {
    //     changeBlockColor(
    //       commandHandler,
    //       contentEditable.current,
    //       currentCaretIndex,
    //       setCurrentCaretIndex,
    //       block,
    //       Color.DEFAULT,
    //     )
    //   } else {
    //     const { deleteBlock } = this.props
    //     const { contentEditable } = this.state
    //     deleteBlock(block.index, contentEditable.current)
    //   }
    // }
    // // join two blocks
    // if (
    //   e.key === 'Backspace' &&
    //   blockParser(block) !== '' &&
    //   currentCaretIndex === 0
    // ) {
    //   e.preventDefault()
    //   const { block, previousBlock, joinBlocks } = this.props
    //   const { contentEditable } = this.state
    //   if (previousBlock)
    //     joinBlocks(previousBlock, block, contentEditable.current)
    // }
    // Store the key to detect combinations like "Shift-Enter" later on
    this.setState({ previousKey: e.key })
  }

  // The openSelectMenuHandler function needs to be invoked on key up. Otherwise
  // the calculation of the caret coordinates does not work properly.
  onKeyUpHandler(e: KeyboardEvent) {
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
    const { commandHandler, restoreBlockAndChangeColor } = this.props
    const { contentEditable, tempBlock } = this.state
    const newBlock = restoreBlockAndChangeColor(
      commandHandler,
      contentEditable.current,
      tempBlock,
      color,
    )
    this.setState({ html: blockParser(newBlock) })
    this.closeSelectMenuHandler()
  }

  render() {
    const { theme, block } = this.props
    const {
      selectMenuIsOpen,
      selectMenuPosition,
      contentEditable,
      html,
      showDragger,
      focused,
    } = this.state

    if (focused) console.log(block)

    return (
      <Draggable draggableId={block.id} index={block.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            onMouseEnter={() => this.setState({ showDragger: true })}
            onMouseLeave={() => this.setState({ showDragger: false })}
          >
            <div className="flex items-center">
              <div
                className={classNames(
                  { 'opacity-100': showDragger || snapshot.isDragging },
                  { 'opacity-0': !showDragger && !snapshot.isDragging },
                  'mr-2 cursor-move transition-opacity transition-duration-750',
                )}
                {...provided.dragHandleProps}
              >
                <span className="w-10 h-5 flex text-slate-400">
                  <PlusIcon className="w-5 h-5 cursor-pointer" />
                  <ViewGridIcon
                    className={classNames(
                      { 'bg-slate-200': snapshot.isDragging },
                      'w-6 h-6 p-0.5 cursor-grab hover:bg-slate-200 rounded-md',
                    )}
                  />
                </span>
              </div>
              {/*  @ts-expect-error: Let's ignore a compile error like this unreachable code */}
              <ContentEditable
                className={classNames(
                  {
                    'h-8 py-[0.25rem] text-lg leading-normal':
                      html === '' && block.tag === BlockTag.PARAGRAPH,
                  },
                  {
                    'text-4xl font-bold py-[0.4rem] leading-normal':
                      html === '' && block.tag === BlockTag.HEADING_1,
                  },
                  {
                    'text-3xl font-bold py-[0.35rem] leading-normal':
                      html === '' && block.tag === BlockTag.HEADING_2,
                  },
                  {
                    'text-2xl font-bold py-[0.3rem] leading-normal':
                      html === '' && block.tag === BlockTag.HEADING_3,
                  },
                  {
                    'text-opacity-40': html === '' && block[block.tag]?.color,
                  },
                  {
                    'caret-black':
                      block[block.tag]?.color === Color.DEFAULT &&
                      theme === 'light',
                  },
                  {
                    'caret-white':
                      block[block.tag]?.color === Color.DEFAULT &&
                      theme === 'dark',
                  },
                  block[block.tag]?.color,
                  'outline-none select-text leading-normal',
                )}
                innerRef={contentEditable}
                html={html}
                placeholder={
                  focused || (html === '' && block.tag !== BlockTag.PARAGRAPH)
                    ? determinePlaceholder(block.tag)
                    : ''
                }
                onFocus={() => this.setState({ focused: true })}
                onBlur={() => this.setState({ focused: false })}
                onChange={this.onChangeHandler}
                onKeyDown={this.onKeyDownHandler}
                onKeyUp={this.onKeyUpHandler}
              />
            </div>
            {selectMenuIsOpen && (
              <FlowMenu
                theme={theme}
                position={selectMenuPosition}
                // onTagSelect={this.tagSelectionHandler}
                onTagSelect={this.tagSelectionHandler}
                onColorSelect={this.colorSelectionHandler}
                close={this.closeSelectMenuHandler}
              />
            )}
          </div>
        )}
      </Draggable>
    )
  }
}

export default FlowBlock
