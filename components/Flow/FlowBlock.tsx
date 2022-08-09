/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable global-require */
/* eslint-disable react/sort-comp */
import { PlusIcon, ViewGridIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FlowMenu from 'components/Flow/FlowMenu'
import DeltaStatic from 'quill-delta'
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
import deleteInBlock from 'utils/flows/deleteInBlock'
import getNextFromRef from 'utils/flows/getNextFromRef'
import getPrevFromRef from 'utils/flows/getPrevFromRef'
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
  saveFlow: () => Promise<void>
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
    initialContent?: string,
    initialColor?: Color,
    insertAbove?: boolean,
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
  forceRerenderFromBody: boolean
  setForceRerenderFromBody: (forceRerenderFromBody: boolean) => void
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
  lastMovement: number
  quillContents: DeltaStatic | undefined
}

const CMD_KEY = '/'

class FlowBlock extends React.Component<Props, State> {
  quill: any

  reactQuillRef: any

  quillRef: any

  constructor(props: Props) {
    super(props)
    if (document) {
      this.quill = require('react-quill')
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this)
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
    this.openSelectMenuHandler = this.openSelectMenuHandler.bind(this)
    this.closeSelectMenuHandler = this.closeSelectMenuHandler.bind(this)
    this.convertTagSelectionHandler = this.convertTagSelectionHandler.bind(this)
    this.tagSelectionHandler = this.tagSelectionHandler.bind(this)
    this.colorSelectionHandler = this.colorSelectionHandler.bind(this)
    this.quillChangeHandler = this.quillChangeHandler.bind(this)
    this.quillRef = null // Quill instance
    this.reactQuillRef = null // ReactQuill component

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
      lastMovement: 0,
      quillContents: block.quillContents,
    }
  }

  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== 'function') return
    this.quillRef = this.reactQuillRef.getEditor()
  }

  componentDidMount() {
    this.attachQuillRefs()
  }

  // Update the page component if one of the following is true:
  // 1. user has changed the html content
  // 2. user has changed the tag
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.reactQuillRef.current) {
      this.reactQuillRef.current.getEditor().root.dataset.placeholder = 'test'
    }

    this.attachQuillRefs()

    const {
      block,
      theme,
      updatePage,
      forceRerenderFromBody,
      setForceRerenderFromBody,
    } = this.props
    const tagChanged = prevProps.block.tag !== block.tag

    if (forceRerenderFromBody) {
      this.setState({ html: blockParser(block, theme) })
      setForceRerenderFromBody(false)
    }

    // // rerender for joinblock and set caret index
    // if (
    //   prevProps.rerenderDetector !== rerenderDetector &&
    //   block.index === rerenderDetector
    // ) {
    //   this.setState({ html: blockParser(block, theme) }, () => {
    //     setRerenderDetector(-1)
    //   })
    // }

    if (tagChanged) {
      updatePage(block)
    }
  }

  onChangeHandler(e: ContentEditableEvent) {
    const { theme, block } = this.props
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
      saveFlow,
      commandHandler,
      block,
      previousBlock,
      nextBlock,
      addBlock,
      deleteBlock,
      joinBlocks,
      sliceBlockIntoNew,
      swapBlocks,
    } = this.props
    const { contentEditable, html, selectMenuIsOpen, lastMovement } = this.state

    this.setState({ forcererender: 'false' })
    const shouldBackup = Date.now() - lastMovement > 500

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
    if (e.key === 'Backspace' && html === '') {
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
          cmdDelete(
            block,
            caretIndex,
            commandHandler,
            contentEditable.current,
            shouldBackup,
          )
          if (shouldBackup) saveFlow()
          this.setState({ lastMovement: Date.now() })
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
          // eslint-disable-next-line no-case-declarations
          altDelete(
            blockBody.richText,
            caretIndex,
            block,
            commandHandler,
            contentEditable.current,
            shouldBackup,
          )
          if (shouldBackup) saveFlow()
          this.setState({ lastMovement: Date.now() })
          break
        case 'ArrowUp':
          // swap this and the block above it if possible
          e.preventDefault()
          if (previousBlock) swapBlocks(block, previousBlock)
          break
        case 'ArrowDown':
          // swap this and the block below it if possible
          e.preventDefault()
          if (nextBlock) swapBlocks(block, nextBlock)
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
      deleteInBlock(
        block,
        getCaretIndex(contentEditable.current),
        commandHandler,
        contentEditable.current,
        shouldBackup,
      )
      if (shouldBackup) saveFlow()
      this.setState({ lastMovement: Date.now() })
      return
    }

    // normal insertion
    if (isAlphaNumericOrSymbol(e.key)) {
      insertIntoBlock(
        block,
        e.key,
        getCaretIndex(contentEditable.current),
        commandHandler,
        contentEditable.current,
        shouldBackup,
      )
      if (shouldBackup) saveFlow()
      this.setState({ lastMovement: Date.now() })
      return
    }

    // normal arrow navigation
    if (e.key === 'ArrowUp' && !selectMenuIsOpen) {
      e.preventDefault()
      const previous = getPrevFromRef(contentEditable?.current)
      if (previous) setCaretToPosition(previous, caretIndex)
    }
    if (e.key === 'ArrowDown' && !selectMenuIsOpen) {
      e.preventDefault()
      const next: HTMLElement | null = getNextFromRef(contentEditable?.current)
      if (next) setCaretToPosition(next, caretIndex)
    }

    // handle creation of new blocks
    if (e.key === 'Enter' && !selectMenuIsOpen) {
      e.preventDefault()
      const rawTextLength = getRawTextLength(block)
      if (caretIndex === 0) {
        return addBlock(
          block.index - 1,
          contentEditable.current,
          BlockTag.PARAGRAPH,
          '',
          Color.DEFAULT,
          true,
        )
      }
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

  modules = {
    toolbar: {
      container: '#toolbar',
      handlers: {
        h1It: () =>
          this.quillRef.format(
            'header',
            this.quillRef.getFormat().header !== 1,
          ),
        boldIt: () =>
          this.quillRef.format('bold', !this.quillRef.getFormat().bold),
        italicIt: () =>
          this.quillRef.format('italic', !this.quillRef.getFormat().italic),
        underlineIt: () =>
          this.quillRef.format(
            'underline',
            !this.quillRef.getFormat().underline,
          ),
        strikeIt: () =>
          this.quillRef.format('strike', !this.quillRef.getFormat().strike),
        codeIt: () =>
          this.quillRef.format('code', !this.quillRef.getFormat().code),
        blockquoteIt: () =>
          this.quillRef.format(
            'blockquote',
            !this.quillRef.getFormat().blockquote,
          ),
        bulletIt: () =>
          this.quillRef.format(
            'list',
            this.quillRef.getFormat().list !== 'bullet',
          ),
      },
    },
    keyboard: {
      bindings: {
        enter: {
          key: 13,
          handler: () => {},
        },
      },
    },
  }

  quillChangeHandler(
    content: string,
    delta: DeltaStatic,
    source: Sources,
    editor: UnprivilegedEditor,
  ) {
    console.log('hi')
    console.log(editor.getContents())
    this.setState({
      quillContents: editor.getContents(),
    })
  }

  render() {
    const Quill = this.quill

    const isH1 = this.quillRef?.getFormat().header === 1
    const isBold = this.quillRef?.getFormat().bold
    const isItalic = this.quillRef?.getFormat().italic
    const isUnderline = this.quillRef?.getFormat().underline
    const isStrike = this.quillRef?.getFormat().strike
    const isCode = this.quillRef?.getFormat().code
    const isBlockquote = this.quillRef?.getFormat().blockquote
    const isBullet = this.quillRef?.getFormat().list === 'bullet'

    const { theme, block } = this.props
    const {
      selectMenuIsOpen,
      selectMenuPosition,
      contentEditable,
      html,
      showDragger,
      focused,
      forcererender,
      quillContents,
    } = this.state

    return (
      <Draggable draggableId={block.id} index={block.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            onMouseEnter={() => this.setState({ showDragger: true })}
            onMouseLeave={() => this.setState({ showDragger: false })}
          >
            <div
              className={classNames(
                `ml-${block.tabs * 4}`,
                'flex items-center relative',
              )}
            >
              <div
                className={classNames(
                  { 'opacity-100': showDragger || snapshot.isDragging },
                  { 'opacity-0': !showDragger && !snapshot.isDragging },
                  'absolute -left-12 cursor-move transition-opacity duration-750',
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

              {Quill && (
                <Quill
                  theme={null}
                  className="w-full"
                  modules={this.modules}
                  onChange={this.quillChangeHandler}
                  value={quillContents}
                  ref={(el) => {
                    this.reactQuillRef = el
                  }}
                />
              )}
            </div>
            <div
              id="toolbar"
              className={classNames(
                { 'bg-slate-50': theme === 'light' },
                { 'bg-slate-700': theme === 'dark' },
                'border shadow-xl rounded-md text-lg pt-0 pb-2 px-2 absolute -right-14 top-0 flex flex-col',
              )}
              style={{ zIndex: 5000 }}
            >
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isH1,
                  },
                  { 'text-primary': isH1 },
                  'ql-h1It',
                )}
                value="1"
              >
                H1
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isBold,
                  },
                  { 'text-primary': isBold },
                  'ql-boldIt font-bold',
                )}
              >
                B
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isItalic,
                  },
                  { 'text-primary': isItalic },
                  'ql-italicIt italic',
                )}
              >
                i
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isUnderline,
                  },
                  { 'text-primary': isUnderline },
                  'ql-underlineIt underline',
                )}
              >
                U
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isStrike,
                  },
                  { 'text-primary': isStrike },
                  'ql-strikeIt line-through',
                )}
              >
                S
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isCode,
                  },
                  { 'text-primary': isCode },
                  'ql-codeIt',
                )}
              >
                {'<>'}
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isBlockquote,
                  },
                  { 'text-primary': isBlockquote },
                  'ql-blockquoteIt',
                )}
              >
                &quot;&quot;
              </button>
              <button
                type="button"
                className={classNames(
                  {
                    'text-stone-600': theme === 'light' && !isBullet,
                  },
                  { 'text-primary': isBullet },
                  'ql-bulletIt',
                )}
              >
                ●
              </button>
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
    )
  }
}

export default FlowBlock
