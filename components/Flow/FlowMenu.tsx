/* eslint-disable no-case-declarations */

import classNames from 'classnames'
import ColorMenuItem from 'components/Flow/Menu/ColorMenuItem'
import NewBlockMenuItem from 'components/Flow/Menu/NewBlockMenuItem'
import { groupBy } from 'lodash'
import { matchSorter } from 'match-sorter'
import React from 'react'
import { Color } from 'types/Colors'
import { BlockTag, Command, commandItems } from 'types/Flow'
import isAlphaNumericOrSymbol from 'utils/flows/isAlphaNumericOrSymbol'
import TurnIntoMenuItem from './Menu/TurnIntoMenuItem'

interface Props {
  theme: string | undefined
  position: {
    x: number | null | undefined
    y: number | null | undefined
  }
  onTagSelect: (tag: BlockTag, convert?: boolean) => void
  onColorSelect: (color: Color) => void
  close: () => void
}

interface State {
  command: string
  items: Command[]
  selectedItem: number
  justScrolled: boolean
}

class SelectMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.selectionHandler = this.selectionHandler.bind(this)
    this.prioritizeAndGroupCommands = this.prioritizeAndGroupCommands.bind(this)

    this.state = {
      command: '',
      items: commandItems,
      selectedItem: 0,
      justScrolled: false,
    }
  }

  // Attach a key listener to add any given key to the command
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler)
  }

  // Whenever the command changes, look for matching tags in the list
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { command, items } = this.state
    if (prevState.command !== command) {
      const itemsSorted = matchSorter(commandItems, command, {
        keys: ['label', 'description'],
        // @ts-expect-error base sorter weird typing error but it works
        baseSort: (a: Command, b: Command) =>
          commandItems.indexOf(a) < commandItems.indexOf(b) ? -1 : 1,
      })
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
    const { items, selectedItem, command } = this.state
    const { close } = this.props

    // commands are 56px, colors are 36px.
    const el = document.getElementById('command-menu')

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
        const selectedCommand = items[selectedItem]
        this.selectionHandler(selectedCommand)
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
    console.log(matchSortedItems)
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

  render() {
    // Define the absolute position before rendering
    const { theme } = this.props
    const { items } = this.state
    const { position } = this.props
    const x = position?.x || 0

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
          'overflow-y-scroll no-scrollbar scroll-smooth ml-1 rounded-lg absolute w-64 max-h-80 p-0 shadow-md z-10  transition-all duration-500',
        )}
        style={{
          left: x || 0,
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
                  onSelect={() => this.selectionHandler(item)}
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
