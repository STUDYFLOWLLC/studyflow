/* eslint-disable no-case-declarations */

import { offset, position } from 'caret-pos'
import classNames from 'classnames'
import ColorMenuItem from 'components/Flow/Menu/ColorMenuItem'
import NewBlockMenuItem from 'components/Flow/Menu/NewBlockMenuItem'
import { groupBy } from 'lodash'
import { matchSorter } from 'match-sorter'
import React from 'react'
import { BaseEditor } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'
import { Color } from 'types/Colors'
import { BlockTag, Command, commandItems } from 'types/Flow'
import isAlphaNumericOrSymbol from 'utils/flows/isAlphaNumericOrSymbol'
import customEditor from 'utils/slate/customEditor'
import TurnIntoMenuItem from './Menu/TurnIntoMenuItem'

interface Props {
  editor: BaseEditor & ReactEditor & HistoryEditor
  theme: string | undefined
  onTagSelect: (tag: BlockTag, convert?: boolean) => void
  onColorSelect: (color: Color) => void
  close: () => void
}

interface State {
  command: string
  items: Command[]
  selectedItem: number
  justScrolled: boolean
  position: {
    x: number | null | undefined
    y: number | null | undefined
  }
  closeIfNotDelete: boolean
}

class SelectMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.selectionHandler = this.selectionHandler.bind(this)
    this.prioritizeAndGroupCommands = this.prioritizeAndGroupCommands.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.selectIt = this.selectIt.bind(this)

    this.state = {
      command: '',
      items: commandItems,
      selectedItem: 0,
      justScrolled: false,
      position: {
        x: null,
        y: null,
      },
      closeIfNotDelete: false,
    }
  }

  // Attach a key listener to add any given key to the command
  componentDidMount() {
    this.updatePosition()
    document.addEventListener('keydown', this.keyDownHandler)
  }

  // Whenever the command changes, look for matching tags in the list
  componentDidUpdate(prevProps: Props, prevState: State) {
    const input = document.getElementById('editor') as HTMLInputElement
    const caretPosition = position(input)
    const { left, top } = caretPosition
    if (prevState.position.x !== left) {
      this.updatePosition()
    }

    const { command, items } = this.state
    if (prevState.command !== command) {
      const itemsSorted = matchSorter(
        commandItems,
        command.slice(0, 1) === '/' ? command.slice(1) : command,
        {
          keys: ['label', 'description'],
          // @ts-expect-error base sorter weird typing error but it works
          baseSort: (a: Command, b: Command) =>
            commandItems.indexOf(a) < commandItems.indexOf(b) ? -1 : 1,
        },
      )
      if (itemsSorted.length === 0) {
        this.setState({ closeIfNotDelete: true })
      }
      this.prioritizeAndGroupCommands(itemsSorted)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler)
  }

  selectionHandler(item: Command) {
    const { onTagSelect, onColorSelect } = this.props
    if (item.commandType === 'new' && item.tag) onTagSelect(item.tag)
    else if (item.commandType === 'color' && item.color)
      onColorSelect(item.color)
    else if (item.commandType === 'turn into' && item.tag)
      onTagSelect(item.tag, true)
  }

  keyDownHandler(e: KeyboardEvent) {
    const { items, selectedItem, command, closeIfNotDelete } = this.state
    const { close, editor } = this.props

    // commands are 56px, colors are 36px.
    const el = document.getElementById('command-menu')

    // if (isAlphaNumericOrSymbol(e.key))
    //   this.setState({ command: command + e.key })

    if (e.key !== 'Backspace' && closeIfNotDelete) close()

    if (e.key === 'Backspace' && (command.length === 0 || command === '/'))
      close()

    if (
      !isAlphaNumericOrSymbol(e.key) &&
      e.key !== 'Enter' &&
      e.key !== 'Backspace' &&
      e.key !== 'ArrowUp' &&
      e.key !== 'ArrowDown' &&
      e.key !== 'Tab' &&
      e.key !== 'Shift'
    )
      return

    let tempSelected = 0
    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        this.selectIt()
        break
      case 'Backspace':
        if (!command) close()
        this.setState({ command: command.substring(0, command.length - 1) })
        break
      case 'ArrowUp':
        tempSelected = selectedItem === 0 ? items.length - 1 : selectedItem - 1
        e.preventDefault()
        this.setState({ selectedItem: tempSelected })
        break
      case 'ArrowDown':
        tempSelected = selectedItem === items.length - 1 ? 0 : selectedItem + 1
        e.preventDefault()
        this.setState({ selectedItem: tempSelected })
        break
      case 'Tab':
        e.preventDefault()
        if (!e.shiftKey) {
          tempSelected =
            selectedItem === items.length - 1 ? 0 : selectedItem + 1
        } else {
          tempSelected =
            selectedItem === 0 ? items.length - 1 : selectedItem - 1
        }
        this.setState({ selectedItem: tempSelected })
        break
      default:
        if (isAlphaNumericOrSymbol(e.key))
          this.setState({ command: command + e.key })
        break
    }
    if (el && tempSelected > 2) {
      this.setState({ justScrolled: true })
      let scrolled = 0
      for (let i = 0; i < items.slice(0, tempSelected).length; i += 1) {
        const item = items[i]
        if (item.commandType === 'new') {
          scrolled += 56
        } else if (item.commandType === 'color') {
          scrolled += 36
        }
      }
      el.scrollTop = scrolled
    } else if (el && tempSelected < 3) {
      this.setState({ justScrolled: true })
      el.scrollTop = 0
    }
  }

  prioritizeAndGroupCommands(matchSortedItems: Command[]) {
    const keysSoFar: string[] = []
    for (let i = 0; i < matchSortedItems.length; i += 1) {
      const item = matchSortedItems[i]
      if (keysSoFar.indexOf(item.commandType) !== -1)
        keysSoFar.push(item.commandType)
      if (keysSoFar.length === 3) break
    }
    for (let i = 0; i < matchSortedItems.length; i += 1) {
      const item = matchSortedItems[i]
      item.sortValue = keysSoFar.indexOf(item.commandType)
    }
    const joinedBumpy = []
    const grouped = groupBy(matchSortedItems, 'sortValue')
    const keys = Object.keys(grouped)
    for (let i = 0; i < keys.length; i += 1) {
      joinedBumpy.push(grouped[keys[i]])
    }
    this.setState({ items: joinedBumpy.flat(), selectedItem: 0 })
  }

  updatePosition() {
    const input = document.getElementById('editor') as HTMLInputElement
    const caretOffset = offset(input)
    const caretPosition = position(input)
    const { left } = caretPosition
    const { top } = caretOffset
    this.setState({ position: { x: left, y: top } })
  }

  selectIt() {
    const { editor, close } = this.props
    const { items, selectedItem } = this.state

    const selectedCommand = items[selectedItem]
    if (selectedCommand.commandType === 'new') {
      // editor.insertBreak()
      customEditor.toggleBlock(editor, selectedCommand.format)
      // console.log(Point.create(editor.value.selection.start))
      // Transforms.select(editor, {
      //   anchor: Editor.start(editor, []),
      //   focus: Editor.end(editor, []),
      // })
      // close()
    }
  }

  render() {
    // Define the absolute position before rendering
    const { theme, editor, close } = this.props
    const { items, position } = this.state
    const x = position?.x || 0
    const y = position?.y || 0

    const joinedBumpy = []
    const grouped = groupBy(items, 'commandType')
    for (let i = 0; i < Object.keys(grouped).length; i += 1) {
      joinedBumpy.push(grouped[Object.keys(grouped)[i]])
    }
    const joinedFlat = joinedBumpy.flat()

    return (
      <div
        className={classNames(
          { 'bg-slate-100': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'overflow-y-scroll no-scrollbar scroll-smooth ml-1 rounded-lg fixed w-64 max-h-80 p-0 shadow-md z-10  transition-all duration-200',
        )}
        style={{
          left: x + 60,
          top: y - 40,
          zIndex: 5000,
        }}
        id="command-menu"
      >
        {items.length === 0 && (
          <span className="ml-1 mt-1 text-sm uppercase font-medium">
            No commands found :(
          </span>
        )}
        <div
          className="transition-all"
          onMouseOver={() => this.setState({ justScrolled: false })}
          onFocus={() => this.setState({ justScrolled: false })}
        >
          {joinedFlat.map((item, index) => {
            const { selectedItem, justScrolled } = this.state
            const isSelected = joinedFlat.indexOf(item) === selectedItem
            const onMouseEnter = () => {
              if (!justScrolled) this.setState({ selectedItem: index })
            }

            if (item.commandType === 'new') {
              return (
                <NewBlockMenuItem
                  key={item.description}
                  item={item}
                  isSelected={isSelected}
                  onSelect={() => {
                    this.selectIt()
                  }}
                  onMouseEnter={onMouseEnter}
                  isTop={
                    index === 0 || joinedFlat[index - 1].commandType !== 'new'
                  }
                />
              )
            }
            if (item.commandType === 'color') {
              return (
                <ColorMenuItem
                  key={item.description}
                  item={item}
                  isSelected={isSelected}
                  onSelect={() => this.selectionHandler(item)}
                  onMouseEnter={onMouseEnter}
                  isTop={
                    index === 0 || joinedFlat[index - 1].commandType !== 'color'
                  }
                />
              )
            }
            if (item.commandType === 'turn into') {
              return (
                <TurnIntoMenuItem
                  key={item.description}
                  item={item}
                  isSelected={isSelected}
                  onSelect={() => this.selectionHandler(item)}
                  onMouseEnter={onMouseEnter}
                  isTop={
                    index === 0 ||
                    joinedFlat[index - 1].commandType !== 'turn into'
                  }
                />
              )
            }
            return null
          })}
        </div>
      </div>
    )
  }
}

export default SelectMenu
