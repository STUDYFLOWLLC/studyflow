import { Combobox } from '@headlessui/react'
import classnames from 'classnames'
import { SVGProps } from 'react'

export interface QuickAction {
  name: string
  CmdIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  shortcut: string
  url: string
}

export default function CMDEntry(props: QuickAction) {
  const { CmdIcon, name, shortcut, url } = props

  return (
    <Combobox.Option
      key={shortcut}
      value={props}
      className={({ active }) =>
        classnames(
          'flex cursor-default select-none items-center rounded-md px-3 py-2',
          active && 'bg-primary-400 text-white',
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
          <span
            className={classnames(
              'ml-3 flex-none text-xs font-semibold',
              active ? 'text-primary-100' : 'text-gray-400',
            )}
          >
            <kbd className="w-5 kbd kbd-xs text-stone-500">{shortcut}</kbd>
          </span>
        </>
      )}
    </Combobox.Option>
  )
}
