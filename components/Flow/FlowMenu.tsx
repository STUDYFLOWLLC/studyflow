/* eslint-disable no-case-declarations */
import { PencilAltIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { matchSorter } from 'match-sorter'
import React, { SVGProps } from 'react'
import { BlockTag } from 'types/Flow'

interface Tag {
  tag: BlockTag
  color: string
  abbreviation: string
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  label: string
  description: string
  textSize?: string
}

const allowedTags: Tag[] = [
  {
    tag: BlockTag.HEADING_1,
    color: 'bg-pink-400',
    abbreviation: 'H1',
    label: 'Heading 1',
    description: 'Big header',
    textSize: 'text-3xl',
  },
  {
    tag: BlockTag.HEADING_2,
    color: 'bg-red-400',
    abbreviation: 'H2',
    label: 'Heading 2',
    description: 'Medium header',
    textSize: 'text-2xl',
  },
  {
    tag: BlockTag.HEADING_3,
    color: 'bg-emerald-400',
    abbreviation: 'H3',
    label: 'Heading 3',
    description: 'Small header',
    textSize: 'text-xl',
  },
  {
    tag: BlockTag.PARAGRAPH,
    color: 'bg-indigo-400',
    abbreviation: 'P',
    label: 'Text',
    icon: PencilAltIcon,
    description: 'Normal text',
  },
]

interface Props {
  position: {
    x: number | null | undefined
    y: number | null | undefined
  }
  onSelect: (tag: BlockTag) => void
  close: () => void
}

interface State {
  command: string
  items: Tag[]
  selectedItem: number
}

class SelectMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.state = {
      command: '',
      items: allowedTags,
      selectedItem: 0,
    }
  }

  // Attach a key listener to add any given key to the command
  componentDidMount() {
    document.getElementById('command-menu')?.focus()
    document.addEventListener('keydown', this.keyDownHandler)
  }

  // Whenever the command changes, look for matching tags in the list
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { command } = this.state
    if (prevState.command !== command) {
      const items = matchSorter(allowedTags, command, { keys: ['tag'] })
      this.setState({ items })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler)
  }

  keyDownHandler(e: { key: string; preventDefault: () => void }) {
    const { items, selectedItem, command } = this.state
    const { onSelect, close } = this.props

    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        onSelect(items[selectedItem].tag)
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
    const { position, onSelect } = this.props
    const x = position?.x || 0

    return (
      <div
        className="ml-1 rounded-lg absolute bg-slate-50 w-64 p-0 shadow-md z-10 flex flex-col justify-end transition-all duration-500"
        style={{ left: x !== 0 ? x : undefined }}
        id="command-menu"
      >
        <div className="transition-all p-2">
          {items.map((item, index) => {
            const { selectedItem } = this.state
            const isSelected = items.indexOf(item) === selectedItem
            return (
              <div
                key={item.label}
                className={classNames(
                  { 'bg-primary bg-opacity-30': isSelected },
                  'flex p-2 rounded',
                )}
                role="button"
                tabIndex={0}
                onClick={() => onSelect(item.tag)}
                onKeyDown={() => onSelect(item.tag)}
                onMouseEnter={() => this.setState({ selectedItem: index })}
              >
                <div
                  className={classNames(
                    'flex h-12 w-12 flex-none items-center justify-center rounded-lg',
                    item.color,
                  )}
                >
                  {item.icon ? (
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className={classNames(item.textSize, 'text-white')}>
                      {item.abbreviation}
                    </span>
                  )}
                </div>
                <div className="ml-4 flex flex-col">
                  <span className={classNames('text-lg font-medium')}>
                    <span>{item.label}</span>
                  </span>
                  <span
                    className={classNames(
                      'text-sm',
                      isSelected ? 'text-gray-700' : 'text-gray-500',
                    )}
                  >
                    {item.description}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default SelectMenu
