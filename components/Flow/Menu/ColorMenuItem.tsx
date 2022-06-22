import classNames from 'classnames'
import { Command } from 'types/Flow'

interface Props {
  item: Command
  isSelected: boolean
  onSelect: (item: Command) => void
  onMouseEnter: () => void
}

export default function NewBlockMenuItem({
  item,
  isSelected,
  onSelect,
  onMouseEnter,
}: Props) {
  return (
    <div
      key={item.label}
      className={classNames(
        { 'bg-primary bg-opacity-30': isSelected },
        'flex items-center px-2 py-1 first-of-type:rounded-t-md last-of-type:rounded-b-md',
      )}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item)}
      onKeyDown={() => onSelect(item)}
      onMouseEnter={() => onMouseEnter()}
    >
      <div
        className={classNames(
          'flex h-4 w-4 flex-none items-center justify-center rounded-sm',
          item.bgColor,
        )}
      >
        <span className={classNames(item.textSize, 'text-white')}>
          {item.abbreviation}
        </span>
      </div>
      <div className="ml-4 flex flex-col">
        <span className={classNames('text-lg font-medium')}>
          <span>{item.label}</span>
        </span>
        <span
          className={classNames(
            { 'text-gray-700': isSelected },
            { 'text-gray-500': !isSelected },
            'text-sm',
          )}
        />
      </div>
    </div>
  )
}
