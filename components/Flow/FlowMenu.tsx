/* eslint-disable no-case-declarations */
import { PencilAltIcon } from '@heroicons/react/outline'
import ColorMenuItem from 'components/Flow/Menu/ColorMenuItem'
import NewBlockMenuItem from 'components/Flow/Menu/NewBlockMenuItem'
import { matchSorter } from 'match-sorter'
import React from 'react'
import { BlockTag, Color, Command } from 'types/Flow'

export const items: Command[] = [
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Heading 1',
    description: 'Big header',
    abbreviation: 'H1',
    textSize: 'text-3xl',
    bgColor: 'bg-rose-400',
    tag: BlockTag.HEADING_1,
  },
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Heading 2',
    description: 'Medium header',
    abbreviation: 'H2',
    textSize: 'text-2xl',
    bgColor: 'bg-lime-400',
    tag: BlockTag.HEADING_2,
  },
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Heading 3',
    description: 'Small header',
    abbreviation: 'H3',
    textSize: 'text-xl',
    bgColor: 'bg-cyan-500',
    tag: BlockTag.HEADING_3,
  },
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Text',
    description: 'Normal text',
    abbreviation: 'P',
    bgColor: 'bg-indigo-500',
    tag: BlockTag.PARAGRAPH,
    icon: PencilAltIcon,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Red',
    description: 'red rose color',
    abbreviation: '',
    bgColor: 'bg-red-500',
    color: Color.RED,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Rose',
    description: 'rose red color',
    abbreviation: '',
    bgColor: 'bg-rose-400',
    color: Color.ROSE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Green',
    description: 'green lime color',
    abbreviation: '',
    bgColor: 'bg-green-400',
    color: Color.GREEN,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Lime',
    description: 'lime green color',
    abbreviation: '',
    bgColor: 'bg-lime-400',
    color: Color.LIME,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Blue',
    description: 'blue cyan color',
    abbreviation: '',
    bgColor: 'bg-sky-500',
    color: Color.BLUE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Cyan',
    description: 'cyan blue color',
    abbreviation: '',
    bgColor: 'bg-cyan-500',
    color: Color.CYAN,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Yellow',
    description: 'yellow orange color',
    abbreviation: '',
    bgColor: 'bg-yellow-500',
    color: Color.YELLOW,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Orange',
    description: 'orange yellow color',
    abbreviation: '',
    bgColor: 'bg-orange-500',
    color: Color.ORANGE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Purple',
    description: 'purple indigo color',
    abbreviation: '',
    bgColor: 'bg-purple-500',
    color: Color.PURPLE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Indigo',
    description: 'indigo purple color',
    abbreviation: '',
    bgColor: 'bg-indigo-500',
    color: Color.INDIGO,
  },
]

interface Props {
  position: {
    x: number | null | undefined
    y: number | null | undefined
  }
  // onTagSelect: (tag: BlockTag) => void
  onTagSelectNew: (tag: BlockTag) => void
  onColorSelect: (color: Color) => void
  close: () => void
}

interface State {
  command: string
  items: Command[]
  selectedItem: number
}

class SelectMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.selectionHandler = this.selectionHandler.bind(this)
    this.state = {
      command: '',
      items,
      selectedItem: 0,
    }
  }

  // Attach a key listener to add any given key to the command
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler)
  }

  // Whenever the command changes, look for matching tags in the list
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { command } = this.state
    if (prevState.command !== command) {
      const itemsSorted = matchSorter(items, command, {
        keys: ['label', 'description', 'abbreviation'],
      })
      this.setState({ items: itemsSorted })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler)
  }

  selectionHandler(item: Command) {
    const { onTagSelectNew, onColorSelect } = this.props
    if (item.tag && item.new) onTagSelectNew(item.tag)
    else if (item.color) onColorSelect(item.color)
  }

  keyDownHandler(e: { key: string; preventDefault: () => void }) {
    const { items, selectedItem, command } = this.state
    const { close } = this.props

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
        e.preventDefault()
        const prevSelected =
          selectedItem === 0 ? items.length - 1 : selectedItem - 1
        this.setState({ selectedItem: prevSelected })
        break
      case 'ArrowDown':
      case 'Tab':
        e.preventDefault()
        const nextSelected =
          selectedItem === items.length - 1 ? 0 : selectedItem + 1
        this.setState({ selectedItem: nextSelected })
        break
      default:
        this.setState({ command: command + e.key })
        break
    }
  }

  render() {
    // Define the absolute position before rendering
    const { items } = this.state
    const news = items.filter((item) => item.commandType === 'new')
    const colors = items.filter((item) => item.commandType === 'color')
    const { position } = this.props
    const x = position?.x || 0

    return (
      <div
        className="overflow-y-scroll ml-1 rounded-lg absolute bg-slate-50 w-64 max-h-80 p-0 shadow-md z-10 flex flex-col transition-all duration-500"
        style={{ left: x !== 0 ? x : undefined }}
        id="command-menu"
      >
        {items.length === 0 && (
          <span className="ml-1 mt-1 text-sm uppercase font-medium">
            No commands found :(
          </span>
        )}
        <div className="transition-all">
          {news.length > 0 && (
            <span className="ml-1 mt-1 text-sm uppercase font-medium">
              New Block
            </span>
          )}
          {news.map((item, index) => {
            const { selectedItem } = this.state
            const isSelected = items.indexOf(item) === selectedItem
            const onMouseEnter = () => this.setState({ selectedItem: index })
            return (
              <NewBlockMenuItem
                key={item.label}
                item={item}
                isSelected={isSelected}
                onSelect={() => this.selectionHandler(item)}
                onMouseEnter={onMouseEnter}
              />
            )
          })}
          {colors.length > 0 && (
            <span className="ml-1 mt-1 text-sm uppercase font-medium">
              Change Color
            </span>
          )}
          {colors.map((item, index) => {
            const { selectedItem } = this.state
            const isSelected = items.indexOf(item) === selectedItem
            const onMouseEnter = () =>
              this.setState({ selectedItem: index + news.length })
            return (
              <ColorMenuItem
                key={item.label}
                item={item}
                isSelected={isSelected}
                onSelect={() => this.selectionHandler(item)}
                onMouseEnter={onMouseEnter}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default SelectMenu
