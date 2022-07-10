import { PlusIcon, ViewGridIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FlowMenu from 'components/Flow/FlowMenu'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Color } from 'types/Colors'
import { Annotations, Block, BlockTag } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import altDelete from 'utils/flows/altDelete'
import blockParser from 'utils/flows/blockParser'
import {
  getCaretCoordinates,
  getCaretIndex,
  setCaretToPosition,
} from 'utils/flows/caretHelpers'
import changeBlockColor from 'utils/flows/changeBlockColor'
import cmdDelete from 'utils/flows/cmdDelete'
import ContentEditable, {
  ContentEditableEvent,
} from 'utils/flows/ContentEditable'
import deleteInBlock from 'utils/flows/deleteInBlock'
import determinePlaceholder from 'utils/flows/determinePlaceholder'
import getRawTextLength from 'utils/flows/getRawTextLength'
import insertAnnotation from 'utils/flows/insertAnnotation'
import insertInSelection from 'utils/flows/insertInSelection'
import insertIntoBlock from 'utils/flows/insertIntoBlock'
import isAlphaNumericOrSymbol from 'utils/flows/isAlphaNumericOrSymbol'
import { removeHTMLTags } from 'utils/flows/richTextEditor'
import {
  decrementBlockTabs,
  incrementBlockTabs,
} from 'utils/flows/setBlockTabs'

interface Props {
  theme: string | undefined
  setTheme: (theme: string) => void
  setChangesMade: (changesMade: boolean) => void
  setFauxSaving: (fauxSaving: boolean) => void
  commandHandler: CommandHandler
  block: Block
  previousBlock: Block | undefined
  nextBlock: Block | undefined
  changeBlockTag: (block: Block, tag: BlockTag) => void
  updatePage: (block: Block) => void
  addBlock: (
    beneathIndex: number,
    ref: HTMLElement | null,
    tag: BlockTag,
  ) => void
  deleteBlock: (index: number, ref: HTMLElement | null) => void
  joinBlocks: (block1: Block, block2: Block, ref: HTMLElement | null) => void
  sliceBlockIntoNew: (
    block1: Block,
    ref: HTMLElement | null,
    caretIndex: number,
  ) => void
  restoreBlockAndChangeColor: (
    commandHandler: CommandHandler,
    element: HTMLElement | null,
    block: Block,
    color: Color,
  ) => Block
  swapBlocks: (block1: Block, block2: Block) => void
  rerenderDetector: number
  setRerenderDetector: (detector: number) => void
  setDisableAnimations: (disableAnimation: boolean) => void
  animatingBlock: boolean
  setAnimatingBlock: (animatingBlock: boolean) => void
}
interface State {
  contentEditable: React.RefObject<HTMLElement>
  html: string
  tempBlock: Block
  selectMenuIsOpen: boolean
  selectMenuPosition: {
    x: number | null | undefined
    y: number | null | undefined
  }
  openedMenuInEmptyBlock: boolean
  showDragger: boolean
  focused: boolean
  forcererender: string
  animatingMoveUp: boolean
  animatingMoveDown: boolean
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

    const { block, theme } = props
    this.state = {
      contentEditable: React.createRef(),
      html: blockParser(block, theme),
      tempBlock: block,
      selectMenuIsOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
      openedMenuInEmptyBlock: false,
      showDragger: false,
      focused: false,
      forcererender: 'false',
      animatingMoveUp: false,
      animatingMoveDown: false,
    }
  }

  // Update the page component if one of the following is true:
  // 1. user has changed the html content
  // 2. user has changed the tag
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { block, theme, rerenderDetector, setRerenderDetector, updatePage } =
      this.props
    const tagChanged = prevProps.block.tag !== block.tag

    // rerender for joinblock and set caret index
    if (
      prevProps.rerenderDetector !== rerenderDetector &&
      block.index === rerenderDetector
    ) {
      console.log('rerender detector')
      this.setState({ html: blockParser(block, theme) }, () => {
        setRerenderDetector(-1)
      })
    }

    if (tagChanged) {
      updatePage(block)
    }
  }

  onChangeHandler(e: ContentEditableEvent) {
    const { theme, block, setChangesMade } = this.props
    // console.log(blockParser(block))
    // console.log(e.target.value)

    this.setState({ html: blockParser(block, theme) })
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
      theme,
      setTheme,
      setChangesMade,
      setFauxSaving,
      commandHandler,
      block,
      previousBlock,
      nextBlock,
      addBlock,
      deleteBlock,
      joinBlocks,
      sliceBlockIntoNew,
      swapBlocks,
      setDisableAnimations,
      setAnimatingBlock,
    } = this.props
    const { contentEditable, selectMenuIsOpen } = this.state

    setChangesMade(true)
    setFauxSaving(true)
    setTimeout(() => setFauxSaving(false), 500)
    this.setState({ forcererender: 'false' })

    const caretIndex = getCaretIndex(contentEditable.current)
    const blockBody = block[block.tag]
    if (!blockBody) return

    const selection = window.getSelection()
    const range = selection?.getRangeAt(0)
    const selectionString = range?.toString()

    // handler for if they have selected something
    if (selectionString !== undefined && selection?.isCollapsed === false) {
      if (e.key === 'Backspace') {
        blockBody.richText = insertInSelection(
          block,
          caretIndex - selectionString.length,
          caretIndex,
          '',
        )
        return
      }
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case 'v':
            break
          default:
            break
        }
        return
      }
      blockBody.richText = insertInSelection(
        block,
        caretIndex - selectionString.length,
        caretIndex,
        e.key,
      )
      return
    }

    // block deletion takes priority over command+delete and alt+delete
    if (e.key === 'Backspace' && blockParser(block) === '') {
      // dont delete the block if it is colored, set the color to default
      if (block[block.tag]?.color !== Color.DEFAULT)
        return changeBlockColor(
          commandHandler,
          contentEditable.current,
          getCaretIndex(contentEditable.current),
          block,
          Color.DEFAULT,
        )
      return deleteBlock(block.index, contentEditable.current)
    }

    // handle commands
    if (e.ctrlKey || e.metaKey) {
      console.log(
        insertAnnotation(blockBody.richText, caretIndex, Annotations.ITALIC),
      )
      switch (e.key) {
        case 'b':
          blockBody.richText = insertAnnotation(
            blockBody.richText,
            caretIndex,
            Annotations.BOLD,
          )
          break
        case 'i':
          blockBody.richText = insertAnnotation(
            blockBody.richText,
            caretIndex,
            Annotations.ITALIC,
          )
          break
        case 'u':
          blockBody.richText = insertAnnotation(
            blockBody.richText,
            caretIndex,
            Annotations.UNDERLINE,
          )
          break
        case 'e':
          blockBody.richText = insertAnnotation(
            blockBody.richText,
            caretIndex,
            Annotations.CODE,
          )
          break
        case 's':
          // if no shift key, then it is a save command
          if (e.shiftKey) {
            blockBody.richText = insertAnnotation(
              blockBody.richText,
              caretIndex,
              Annotations.STRIKETHROUGH,
            )
          }
          break
        case 'Backspace':
          blockBody.richText = cmdDelete(block, caretIndex)
          break
        case 'ArrowUp':
          // focus on the highest block
          break
        case 'ArrowDown':
          // focus on the lowest block
          break
        case 'l':
          e.preventDefault()
          setTheme(theme === 'light' ? 'dark' : 'light')
          break
        default:
          break
      }
      return
    }

    if (e.altKey) {
      switch (e.key) {
        case 'Backspace':
          blockBody.richText = altDelete(blockBody.richText, caretIndex)
          break
        case 'ArrowUp':
          // swap this and the block above it if possible
          e.preventDefault()
          setDisableAnimations(false)
          this.setState({ animatingMoveUp: true })
          if (previousBlock) swapBlocks(block, previousBlock)
          setTimeout(() => {
            setDisableAnimations(true)
          }, 200)
          setTimeout(() => {
            this.setState({ animatingMoveUp: false })
          }, 500)
          setTimeout(() => {
            setAnimatingBlock(false)
          }, 1000)
          break
        case 'ArrowDown':
          // swap this and the block below it if possible
          e.preventDefault()
          setDisableAnimations(false)
          this.setState({ animatingMoveDown: true })
          if (nextBlock) swapBlocks(block, nextBlock)
          setTimeout(() => {
            setDisableAnimations(true)
          }, 200)
          setTimeout(() => {
            this.setState({ animatingMoveDown: false })
          }, 500)
          setTimeout(() => {
            setAnimatingBlock(false)
          }, 1000)
          break
        default:
          break
      }
      return
    }

    // store a copy of the block to restore after command. do not return here because
    // the command may not go through
    if (e.key === '/') {
      this.setState({ tempBlock: structuredClone(block) })
    }

    if (e.key === 'Backspace' && caretIndex === 0 && previousBlock) {
      return joinBlocks(previousBlock, block, contentEditable.current)
    }

    // normal deletion
    if (e.key === 'Backspace' && !e.altKey) {
      deleteInBlock(block, getCaretIndex(contentEditable.current))
    }

    // normal insertion
    if (isAlphaNumericOrSymbol(e.key)) {
      insertIntoBlock(block, e.key, getCaretIndex(contentEditable.current))
    }

    // normal arrow navigation
    if (e.key === 'ArrowUp' && !selectMenuIsOpen) {
      e.preventDefault()
      const previous = contentEditable.current?.parentElement?.parentElement
        ?.parentElement?.parentElement?.parentElement?.previousElementSibling
        ?.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
        .childNodes[1] as HTMLElement
      if (previous) setCaretToPosition(previous, caretIndex)
    }
    if (e.key === 'ArrowDown' && !selectMenuIsOpen) {
      e.preventDefault()
      const next: HTMLElement | null = contentEditable.current?.parentElement
        ?.parentElement?.parentElement?.parentElement?.parentElement
        ?.nextElementSibling?.childNodes[0].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[1] as HTMLElement
      if (next) setCaretToPosition(next, caretIndex)
    }

    // handle creation of new blocks
    if (e.key === 'Enter' && !selectMenuIsOpen) {
      e.preventDefault()
      const rawTextLength = getRawTextLength(block)
      if (rawTextLength === caretIndex)
        return addBlock(
          block.index,
          contentEditable.current,
          BlockTag.PARAGRAPH,
        )
      return sliceBlockIntoNew(block, contentEditable.current, caretIndex)
    }

    if (e.key === 'Tab' && !e.shiftKey && !selectMenuIsOpen) {
      e.preventDefault()
      block.tabs = incrementBlockTabs(block)
      this.setState({ forcererender: 'true' })
      return
    }

    if (e.key === 'Tab' && !selectMenuIsOpen) {
      e.preventDefault()
      block.tabs = decrementBlockTabs(block)
      this.setState({ forcererender: 'true' })
    }
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
    const { theme, block, changeBlockTag } = this.props
    const { contentEditable, tempBlock } = this.state

    if (tag !== block.tag) changeBlockTag(block, tag)

    const blockBody = block[block.tag]
    const tempBlockBody = tempBlock[tempBlock.tag]

    if (blockBody && tempBlockBody) {
      blockBody.richText = tempBlockBody.richText
    }

    this.setState({ html: blockParser(block, theme) })
    this.closeSelectMenuHandler()
    contentEditable.current?.focus()
  }

  tagSelectionHandler(tag: BlockTag, convert?: boolean) {
    const { theme, block, addBlock } = this.props
    const { contentEditable, openedMenuInEmptyBlock, tempBlock } = this.state

    if (openedMenuInEmptyBlock || convert)
      return this.convertTagSelectionHandler(tag)

    const blockBody = block[block.tag]
    const tempBlockBody = tempBlock[tempBlock.tag]

    if (blockBody && tempBlockBody) {
      blockBody.richText = tempBlockBody.richText
    }

    this.setState({ html: blockParser(tempBlock, theme) })
    this.closeSelectMenuHandler()
    addBlock(block.index, contentEditable.current, tag)
  }

  colorSelectionHandler(color: Color) {
    const { theme, commandHandler, restoreBlockAndChangeColor } = this.props
    const { contentEditable, tempBlock } = this.state
    const newBlock = restoreBlockAndChangeColor(
      commandHandler,
      contentEditable.current,
      tempBlock,
      color,
    )
    this.setState({ html: blockParser(newBlock, theme) })
    this.closeSelectMenuHandler()
  }

  render() {
    const { theme, block, animatingBlock } = this.props
    const {
      selectMenuIsOpen,
      selectMenuPosition,
      contentEditable,
      html,
      showDragger,
      focused,
      forcererender,
      animatingMoveDown,
      animatingMoveUp,
    } = this.state

    return (
      <div className="mx-auto max-w-3xl">
        <Draggable draggableId={block.id} index={block.index}>
          {(provided, snapshot) => (
            <div>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                onMouseEnter={() => this.setState({ showDragger: true })}
                onMouseLeave={() => this.setState({ showDragger: false })}
              >
                <div className="relative">
                  <div
                    className={classNames(
                      `ml-${block.tabs * 4}`,
                      'flex items-center transition-all duration-200',
                    )}
                  >
                    <div
                      className={classNames(
                        { 'opacity-100': showDragger || snapshot.isDragging },
                        { 'opacity-0': !showDragger && !snapshot.isDragging },
                        'absolute left-[-3rem] cursor-move transition-opacity duration-750',
                      )}
                      {...provided.dragHandleProps}
                    >
                      <span className="w-10 h-6 flex text-slate-400">
                        <PlusIcon className="w-6 h-6 cursor-pointer" />
                        <ViewGridIcon
                          className={classNames(
                            { 'hover:bg-slate-200': theme === 'light' },
                            { 'hover:bg-slate-600': theme === 'dark' },
                            {
                              'bg-slate-200':
                                snapshot.isDragging && theme === 'light',
                            },
                            'w-6 h-6 cursor-grab rounded',
                          )}
                        />
                      </span>
                    </div>
                    {/*  @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                    <ContentEditable
                      className={classNames(
                        {
                          'text-lg my-0 py-[0.25rem] leading-normal':
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
                          'caret-black':
                            block[block.tag]?.color === Color.DEFAULT &&
                            theme === 'light',
                        },
                        {
                          'caret-white':
                            block[block.tag]?.color === Color.DEFAULT &&
                            theme === 'dark',
                        },
                        {
                          'opacity-0':
                            !focused &&
                            html === '' &&
                            block.tag === BlockTag.PARAGRAPH,
                        },
                        {
                          'opacity-80':
                            focused &&
                            html === '' &&
                            block.tag === BlockTag.PARAGRAPH,
                        },
                        {
                          'opacity-80':
                            !focused &&
                            html === '' &&
                            block.tag !== BlockTag.PARAGRAPH,
                        },
                        {
                          'opacity-90':
                            focused &&
                            html === '' &&
                            block.tag !== BlockTag.PARAGRAPH,
                        },
                        {
                          'z-10 transition-all shadow-2xl rounded-md ease-out ':
                            animatingMoveUp,
                        },
                        {
                          'z-10 transition-all shadow-2xl rounded-md ease-in':
                            animatingMoveDown,
                        },
                        {
                          'z-10 transition-all shadow-2xl rounded-md':
                            snapshot.isDragging || snapshot.isDropAnimating,
                        },
                        { 'duration-300': animatingBlock },
                        block[block.tag]?.color !== Color.DEFAULT
                          ? block[block.tag]?.color
                          : '',
                        'bg-inherit min-h-fit break-words outline-none select-text cursor-text w-full',
                      )}
                      innerRef={contentEditable}
                      html={html}
                      placeholder={determinePlaceholder(block.tag)}
                      onFocus={() => this.setState({ focused: true })}
                      onBlur={() => this.setState({ focused: false })}
                      onChange={this.onChangeHandler}
                      onKeyDown={this.onKeyDownHandler}
                      onKeyUp={this.onKeyUpHandler}
                      forcererender={forcererender}
                    />
                  </div>
                </div>
              </div>
              {selectMenuIsOpen && (
                <FlowMenu
                  theme={theme}
                  position={selectMenuPosition}
                  onTagSelect={this.tagSelectionHandler}
                  onColorSelect={this.colorSelectionHandler}
                  close={this.closeSelectMenuHandler}
                />
              )}
            </div>
          )}
        </Draggable>
      </div>
    )
  }
}

export default FlowBlock
