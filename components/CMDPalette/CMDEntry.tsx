import { Combobox } from '@headlessui/react'
import classnames from 'classnames'
import { QuickAction } from 'types/CMDPalette'

export default function CMDEntry({
  CmdIcon,
  name,
  shortcut,
  url,
  action,
}: QuickAction) {
  return (
    <Combobox.Option
      key={shortcut}
      value={{ CmdIcon, name, shortcut, url, action }}
      className={({ active }) =>
        classnames(
          'flex cursor-default select-none items-center rounded-md px-3 py-2',
          active && 'bg-primary text-white',
        )
      }
    >
      {({ active }) => (
        <>
          <CmdIcon
            className={classnames(
              'h-6 w-6 flex-none',
              active ? 'text-white' : 'text-gray-400',
            )}
            aria-hidden="true"
          />
          <span className="ml-3 flex-auto truncate">{name}</span>
          <kbd className="w-5 kbd kbd-xs">{shortcut}</kbd>
        </>
      )}
    </Combobox.Option>
  )
}
